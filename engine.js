(function (root) {
  'use strict';
  const normalize = value => String(value ?? '').normalize('NFKC').trim().toLocaleLowerCase('nb');
  const text = (value, max = 64) => typeof value === 'string' ? value.trim().slice(0, max) : '';
  const uid = () => root.crypto?.randomUUID?.() || `p-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  function random() {
    if (!root.crypto?.getRandomValues) return Math.random();
    return root.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296;
  }
  const pick = (items, rng) => items[Math.min(items.length - 1, Math.floor(rng() * items.length))];
  function cleanWords(words, limit = 3000) {
    const seen = new Set();
    return (Array.isArray(words) ? words : []).slice(0, limit).flatMap(item => {
      const word = text(typeof item === 'string' ? item : item?.word, 90);
      const hint = text(item?.hint, 90);
      const key = normalize(word);
      if (!key || seen.has(key)) return [];
      seen.add(key);
      return [{ word, hint }];
    });
  }
  function cleanPacks(packs) {
    const ids = new Set();
    return (Array.isArray(packs) ? packs : []).slice(0, 50).flatMap((pack, i) => {
      const name = text(pack?.name, 40), words = cleanWords(pack?.words);
      let id = text(pack?.id, 90);
      if (!/^custom-[a-zA-Z0-9-]+$/.test(id) || ids.has(id)) id = `custom-${i}-${uid()}`;
      ids.add(id);
      return name && words.length ? [{ id, name, words, custom: true, icon: 'spark', description: 'Laget av dere' }] : [];
    });
  }
  function defaults() {
    return { version: 2, players: Array.from({ length: 5 }, (_, i) => ({ id: uid(), name: `Spiller ${i + 1}`, score: 0 })), selected: ['mixed'], settings: { hints: true, surprises: true, timer: 0 }, customPacks: [], history: [], roundNumber: 0 };
  }
  function restore(raw) {
    const state = defaults();
    if (!raw || typeof raw !== 'object') return state;
    if (Array.isArray(raw.players) && raw.players.length >= 3 && raw.players.length <= 12) {
      const ids = new Set();
      state.players = raw.players.map((p, i) => {
        let id = text(p?.id, 80); if (!id || ids.has(id)) id = uid(); ids.add(id);
        return { id, name: text(p?.name, 28) || `Spiller ${i + 1}`, score: Number.isSafeInteger(p?.score) && p.score >= 0 ? p.score : 0 };
      });
    }
    state.customPacks = cleanPacks(raw.customPacks);
    if (Array.isArray(raw.selected)) state.selected = raw.selected.filter(x => typeof x === 'string').slice(0, 100);
    state.settings = { hints: raw.settings?.hints !== false, surprises: raw.settings?.surprises !== false, timer: [0, 180, 300, 480].includes(raw.settings?.timer) ? raw.settings.timer : 0 };
    state.history = (Array.isArray(raw.history) ? raw.history : []).filter(x => typeof x === 'string').map(normalize).slice(-10);
    state.roundNumber = Number.isSafeInteger(raw.roundNumber) && raw.roundNumber >= 0 ? raw.roundNumber : 0;
    return state;
  }
  function validatePlayers(players) {
    if (players.length < 3 || players.length > 12) throw new Error('Velg mellom 3 og 12 spillere.');
    const names = new Set();
    for (const p of players) {
      const name = normalize(p.name);
      if (!name) throw new Error('Alle spillerne trenger et navn.');
      if (names.has(name)) throw new Error('Bruk ulike navn, så dere vet hvem dere stemmer på.');
      names.add(name);
    }
  }
  function createRound(state, packs, rng = random) {
    validatePlayers(state.players);
    const selected = packs.filter(p => state.selected.includes(p.id));
    if (!selected.length) throw new Error('Velg minst én kategori.');
    const pool = cleanWords(selected.flatMap(p => p.words), 160000);
    if (!pool.length) throw new Error('Kategorien trenger minst ett ord.');
    if (state.settings.hints && pool.some(w => !w.hint)) throw new Error('Noen egne ord mangler hint. Legg til hint, eller slå av imposterhint under spillvalg.');
    const recent = new Set(state.history);
    const fresh = pool.filter(w => !recent.has(normalize(w.word)));
    // Small custom decks cycle only after every available word has been played.
    const oldestFirst = [...pool].sort((a, b) => state.history.lastIndexOf(normalize(a.word)) - state.history.lastIndexOf(normalize(b.word)));
    let secret = { ...(fresh.length ? pick(fresh, rng) : oldestFirst[0]), kind: 'word' };
    if (state.settings.surprises) {
      // Disjoint intervals give the photo and each player's name exactly 0.1% each.
      const surprise = rng();
      if (surprise < 0.001) secret = { word: 'Hemmelig bilde', hint: 'Internhumor', kind: 'image' };
      else if (surprise < 0.001 * (state.players.length + 1)) {
        const player = state.players[Math.min(state.players.length - 1, Math.floor((surprise - 0.001) / 0.001))];
        if (!recent.has(normalize(player.name))) secret = { word: player.name, hint: 'Her inne', kind: 'name' };
      }
    }
    const allImposters = state.settings.surprises && rng() < 0.005;
    const imposters = allImposters ? state.players.map(p => p.id) : [pick(state.players, rng).id];
    const game = { id: uid(), players: state.players.map(p => ({ id: p.id, name: p.name })), secret, imposters, allImposters, starterId: pick(state.players, rng).id, revealIndex: 0, stage: 'reveal', phase: 'pass', seen: false, voteId: null, result: null, hints: state.settings.hints, timerSeconds: state.settings.timer, remaining: state.settings.timer, endAt: null, paused: false };
    return { game, history: secret.kind === 'image' ? state.history : [...state.history, normalize(secret.word)].slice(-10), roundNumber: state.roundNumber + 1 };
  }
  function finishRound(state, game) {
    if (game.result) return game.result;
    if (game.stage !== 'vote' || !game.players.some(p => p.id === game.voteId)) throw new Error('Velg spilleren dere vil stemme på.');
    const caught = !game.allImposters && game.imposters.includes(game.voteId);
    const points = game.players.map(p => ({ id: p.id, points: game.allImposters ? 1 : caught ? (game.imposters.includes(p.id) ? 0 : 1) : (game.imposters.includes(p.id) ? 2 : 0) }));
    points.forEach(award => { const player = state.players.find(p => p.id === award.id); if (player) player.score += award.points; });
    game.result = { caught, points };
    game.stage = 'result';
    return game.result;
  }
  function restoreGame(raw, state) {
    if (!raw || !['reveal', 'round', 'vote', 'result'].includes(raw.stage) || !Array.isArray(raw.players) || raw.players.length !== state.players.length) return null;
    if (!raw.players.every((p, i) => p?.id === state.players[i].id && typeof p.name === 'string')) return null;
    if (!raw.secret || typeof raw.secret.word !== 'string' || typeof raw.secret.hint !== 'string' || !['word', 'name', 'image'].includes(raw.secret.kind)) return null;
    if (!Array.isArray(raw.imposters) || !raw.imposters.length || !raw.imposters.every(id => state.players.some(p => p.id === id))) return null;
    if (!Number.isInteger(raw.revealIndex) || raw.revealIndex < 0 || raw.revealIndex >= state.players.length) return null;
    if (!state.players.some(p => p.id === raw.starterId)) return null;
    if (typeof raw.allImposters !== 'boolean' || typeof raw.hints !== 'boolean') return null;
    if (raw.allImposters ? raw.imposters.length !== state.players.length : raw.imposters.length !== 1) return null;
    if (new Set(raw.imposters).size !== raw.imposters.length) return null;
    if (raw.stage === 'result' && (!raw.result || typeof raw.result.caught !== 'boolean' || !Array.isArray(raw.result.points) || !raw.result.points.every(p => p && typeof p.id === 'string' && Number.isInteger(p.points) && p.points >= 0 && p.points <= 2))) return null;
    if (raw.stage !== 'result' && raw.result) return null;
    const timerSeconds = [0, 180, 300, 480].includes(raw.timerSeconds) ? raw.timerSeconds : 0;
    const remaining = Number.isFinite(raw.remaining) ? Math.min(timerSeconds, Math.max(0, raw.remaining)) : timerSeconds;
    return { ...raw, phase: 'pass', seen: false, timerSeconds, remaining, endAt: Number.isFinite(raw.endAt) ? raw.endAt : null, paused: !!raw.paused };
  }
  root.ImposterEngine = { normalize, uid, random, cleanWords, cleanPacks, defaults, restore, validatePlayers, createRound, finishRound, restoreGame };
  if (typeof module !== 'undefined') module.exports = root.ImposterEngine;
})(globalThis);
