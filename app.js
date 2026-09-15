(() => {
  'use strict';
  const E = ImposterEngine, KEY = 'imposter-remastered-v2', ROUND = 'imposter-round-v2';
  const app = document.getElementById('app'), dialog = document.getElementById('dialog');
  const $ = s => document.querySelector(s);
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const icons = { arrow: '<path d="M4 12h16m-6-6 6 6-6 6"/>', back: '<path d="M20 12H4m6 6-6-6 6-6"/>', plus: '<path d="M12 5v14M5 12h14"/>', minus: '<path d="M5 12h14"/>', check: '<path d="m5 12 4 4L19 6"/>', close: '<path d="m6 6 12 12M6 18 18 6"/>', lock: '<rect x="5" y="10" width="14" height="11" rx="3"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2"/>', eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>', globe: '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>', film: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 9h4m-4 6h4m10-6h4m-4 6h4"/>', tv: '<rect x="3" y="7" width="18" height="14" rx="3"/><path d="m8 2 4 5 4-5"/>', spark: '<path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3Z"/>', food: '<path d="M4 2v7a3 3 0 0 0 6 0V2M7 2v20M18 2c-4 3-4 10 0 10h2V2h-2Zm2 10v10"/>', politics: '<path d="m3 9 9-6 9 6H3Zm2 3v6m7-6v6m7-6v6M3 21h18"/>', mask: '<path d="M3 7h18l-2 10-7 4-7-4Z"/><path d="m7 11 3 2m4 0 3-2"/>', game: '<path d="M7 7h10c4 0 6 13 2 13l-4-4H9l-4 4C1 20 3 7 7 7Z"/><path d="M7 10v5m-2-2h4m7-2h.01m2 3h.01"/>', home: '<path d="m3 10 9-7 9 7v11H3V10Z"/><path d="M9 21v-8h6v8"/>', star: '<path d="m12 2 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1Z"/>', history: '<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>', bolt: '<path d="m14 2-9 12h6l-1 8 9-12h-6l1-8Z"/>', users: '<circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M17 4a3 3 0 0 1 0 6m1 4c3 1 3 4 3 7"/>', trophy: '<path d="M7 3h10v7a5 5 0 0 1-10 0V3ZM7 5H3v3a4 4 0 0 0 4 4m10-7h4v3a4 4 0 0 1-4 4m-5 3v6m-5 0h10"/>', help: '<circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 1 1 5 2c-2 1-2 2-2 3m0 3h.01"/>', settings: '<path d="M4 7h16M4 17h16"/><circle cx="8" cy="7" r="3"/><circle cx="16" cy="17" r="3"/>', download: '<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>', edit: '<path d="m15 3 6 6-12 12H3v-6L15 3Zm-3 3 6 6"/>', trash: '<path d="M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7m4-7v7"/>' };
  Object.assign(icons, {
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
    leaf: '<path d="M20 3C9 2 2 7 5 15c3 8 16 4 15-12ZM5 20 16 8"/>',
    paw: '<ellipse cx="12" cy="16" rx="6" ry="4"/><ellipse cx="5" cy="9" rx="2" ry="3"/><ellipse cx="10" cy="5" rx="2" ry="3"/><ellipse cx="16" cy="6" rx="2" ry="3"/><ellipse cx="20" cy="11" rx="2" ry="3"/>',
    music: '<path d="M9 18V5l11-2v13M9 9l11-2"/><ellipse cx="6" cy="18" rx="3" ry="3"/><ellipse cx="17" cy="16" rx="3" ry="3"/>',
    heart: '<path d="M12 21 4 13C-3 5 7-2 12 6c5-8 15-1 8 7Z"/>',
    book: '<path d="M12 6C8 3 4 3 2 4v16c4-2 7-1 10 1 3-2 6-3 10-1V4c-3-1-7-1-10 2Zm0 0v15"/>',
    car: '<path d="m5 8 2-5h10l2 5M3 9h18v9H3V9Zm2 9v3m14-3v3M6 13h2m8 0h2"/>',
    case: '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V3h8v4M3 12l9 4 9-4m-9 2v4"/>'
  });
  const icon = name => `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${icons[name] || icons.spark}</svg>`;
  const categories = { countries: 'globe', movies: 'film', tv: 'tv', mixed: 'spark', food: 'food', political: 'politics', characters: 'mask', videogames: 'game', house: 'home', actors: 'star', history: 'history', fortnite: 'bolt', animals: 'paw', nature: 'leaf', cities: 'globe', body: 'heart', artists: 'music', songs: 'music', brands: 'star', myths: 'book', sports: 'trophy', jobs: 'case', transport: 'car', schooltech: 'book' };
  const order = ['mixed', 'countries', 'movies', 'tv', 'food', 'fortnite', 'characters', 'videogames', 'house', 'actors', 'history', 'political', 'animals', 'nature', 'cities', 'body', 'artists', 'songs', 'brands', 'myths', 'sports', 'jobs', 'transport', 'schooltech'];
  const newCategories = new Set(order.slice(12));
  const builtins = [...(globalThis.IMPOSTER_PACKS || [])].sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
  let storageError = false, saved = null;
  try { saved = JSON.parse(localStorage.getItem(KEY)); } catch { storageError = true; }
  let state = E.restore(saved), game = null, screen = 'setup', view = 'all', categorySearch = '', toastTimer, timer, lastAction = 0, installPrompt;
  if (!saved) { try { state.customPacks = E.cleanPacks(JSON.parse(localStorage.getItem('imposterSavedCategories') || '[]')); } catch { /* Broken legacy data cannot block play. */ } }
  const allPacks = () => [...builtins, ...state.customPacks];
  function reconcile() { state.selected = state.selected.filter(id => allPacks().some(p => p.id === id)); if (!state.selected.length && builtins.length) state.selected = [builtins[0].id]; }
  reconcile();
  try { game = E.restoreGame(JSON.parse(sessionStorage.getItem(ROUND)), state); if (game) screen = 'resume'; } catch { /* Keep a clean setup. */ }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); storageError = false; } catch { storageError = true; }
    try { if (game) sessionStorage.setItem(ROUND, JSON.stringify(game)); else sessionStorage.removeItem(ROUND); } catch { storageError = true; }
    if (storageError) toast('Nettleseren kunne ikke lagre. Spillet virker, men endringer kan forsvinne når du lukker det.', 6500);
    return !storageError;
  }
  function toast(message, duration = 3500) { const node = $('#toast'); node.textContent = message; node.classList.add('visible'); clearTimeout(toastTimer); toastTimer = setTimeout(() => node.classList.remove('visible'), duration); }
  function button(action, label, cls = 'btn primary', extra = '') { return `<button class="${cls}" data-action="${action}" ${extra}>${label}</button>`; }
  function avatar(p, i, large = false) { return `<span class="avatar a${i % 6} ${large ? 'large' : ''}">${esc(p.name.trim().slice(0, 1).toLocaleUpperCase('nb') || i + 1)}</span>`; }
  function mascot(cls = '') { return `<span class="mascot ${cls}" aria-hidden="true"><i></i><i></i></span>`; }
  function header() { return `<header class="topbar"><button class="brand" data-action="home" aria-label="Imposter, spilloppsett">${mascot('mini')}<span>imposter<span class="brand-dot">.</span></span></button><span class="edition">REMASTERED</span><nav aria-label="Spillmeny">${button('scores', icon('trophy'), 'icon-btn', 'aria-label="Poengtavle" title="Poengtavle"')}${button('help', icon('help'), 'icon-btn', 'aria-label="Spilleregler" title="Spilleregler"')}</nav></header>`; }
  function categoryCards() {
    const packs = allPacks().filter(p => (view !== 'custom' || p.custom) && (view !== 'new' || newCategories.has(p.id)) && (view !== 'selected' || state.selected.includes(p.id)) && E.normalize(p.name).includes(E.normalize(categorySearch)));
    if (!packs.length) return `<div class="empty"><p>${view === 'custom' && !categorySearch ? 'Deres interne vitser fortjener en kategori.' : 'Ingen kategorier matcher søket.'}</p>${view === 'custom' ? button('custom', `${icon('plus')} Lag en kategori`, 'btn secondary') : ''}</div>`;
    return packs.map(p => `<div class="category-wrap"><button class="category ${state.selected.includes(p.id) ? 'selected' : ''}" data-pack="${esc(p.id)}" aria-pressed="${state.selected.includes(p.id)}"><span class="category-icon c-${esc(p.id)}">${icon(categories[p.id] || 'spark')}</span><span class="category-copy"><strong>${esc(p.name)}</strong><small>${p.words.length} ord${p.custom && p.words.some(w => !w.hint) ? ' · mangler hint' : ''}</small></span><span class="selection">${icon('check')}</span></button>${p.custom ? `<button class="edit-pack" data-edit="${esc(p.id)}" aria-label="Rediger ${esc(p.name)}">${icon('edit')}</button>` : ''}</div>`).join('');
  }
  function selectionSummary() {
    const packs = allPacks().filter(p => state.selected.includes(p.id));
    return `<a class="player-jump" href="#players-section">${state.players.length} spillere</a> <span>·</span> ${packs.length === 1 ? esc(packs[0].name) : `${packs.length} kategorier`}`;
  }
  function options() { return `<details class="options"><summary>${icon('settings')} Spillvalg <span>${icon('plus')}</span></summary><div class="option-body"><label class="switch-row"><span><strong>Hint til imposteren</strong><small>Et relatert ord å bløffe med.</small></span><input type="checkbox" data-setting="hints" ${state.settings.hints ? 'checked' : ''}><span class="switch" aria-hidden="true"></span></label><label class="switch-row"><span><strong>Sjeldne overraskelser</strong><small>Alle imposter: 0,5 %. Bilde og hvert spillernavn: 0,1 %.</small></span><input type="checkbox" data-setting="surprises" ${state.settings.surprises ? 'checked' : ''}><span class="switch" aria-hidden="true"></span></label><label class="timer-label" for="timer-setting"><strong>Diskusjonstid</strong><select id="timer-setting" data-setting="timer">${[[0, 'Uten tidtaker'], [180, '3 minutter'], [300, '5 minutter'], [480, '8 minutter']].map(([v, s]) => `<option value="${v}" ${state.settings.timer === v ? 'selected' : ''}>${s}</option>`).join('')}</select></label></div></details>`; }
  function setup() { return `<main class="setup-layout"><section class="main-column"><div class="hero"><div class="hero-copy"><span class="eyebrow"><i></i> EN MOBIL. INGEN Å STOLE PÅ.</span><h1>Hvem av dere<br><em>bløffer?</em></h1><p>Alle kjenner ordet. Én later som.<br>Finn imposteren blant vennene dine.</p><div class="hero-meta">${icon('users')} 3–12 spillere <span>•</span> Spill sammen</div></div><div class="card-scene" aria-hidden="true"><div class="orbit o1"></div><div class="orbit o2"></div><div class="playing-card rear"><span>HEMMELIG ORD</span><b>?</b><small>Hold kortene tett.</small></div><div class="playing-card front"><span>STOL PÅ INGEN</span>${mascot()}<b>IMPOSTER</b><small>Kunsten å late som.</small></div><div class="scene-star">✦</div><div class="scene-label">Hvem? Meg?</div></div></div><section class="category-section" aria-labelledby="categories-title"><div class="section-heading"><div><span class="eyebrow muted">01 / VELG STEMNINGEN</span><h2 id="categories-title">Hva kan dere litt om?</h2></div>${button('custom', `${icon('plus')} Egen kategori`, 'text-btn')}</div><div class="category-toolbar"><div class="tabs" role="group" aria-label="Vis kategorier"><button data-view="all" class="${view === 'all' ? 'active' : ''}" aria-pressed="${view === 'all'}">Alle</button><button data-view="new" class="${view === 'new' ? 'active' : ''}" aria-pressed="${view === 'new'}">Nye <span class="new-count">12</span></button><button data-view="selected" class="${view === 'selected' ? 'active' : ''}" aria-pressed="${view === 'selected'}">Valgte</button><button data-view="custom" class="${view === 'custom' ? 'active' : ''}" aria-pressed="${view === 'custom'}">Egne</button></div><span class="selection-note">${builtins.length} kategorier · velg én eller flere</span></div><label class="category-search" for="category-search">${icon('search')}<input id="category-search" type="search" placeholder="Søk etter kategori …" aria-label="Søk etter kategori" autocomplete="off" value="${esc(categorySearch)}"></label><div class="category-grid" id="category-grid">${categoryCards()}</div></section><div class="library-footer"><span>${icon('lock')} Hemmelighetene blir på denne enheten.</span><span>v2.1</span></div></section><aside class="setup-sidebar" id="players-section"><div class="players-heading"><span class="eyebrow muted">02 / SAMLE GJENGEN</span><div class="section-heading"><h2>Hvem er med?</h2><div class="stepper">${button('minus', icon('minus'), 'icon-btn', `aria-label="Fjern spiller" ${state.players.length <= 3 ? 'disabled' : ''}`)}<span aria-live="polite">${state.players.length}</span>${button('plus', icon('plus'), 'icon-btn', `aria-label="Legg til spiller" ${state.players.length >= 12 ? 'disabled' : ''}`)}</div></div><p>Gi hver spiller et navn. Mobilen går på rundgang.</p></div><div class="player-list">${state.players.map((p, i) => `<label class="player-row">${avatar(p, i)}<input data-player="${esc(p.id)}" aria-label="Navn på spiller ${i + 1}" maxlength="28" value="${esc(p.name)}" autocomplete="off" spellcheck="false"><span class="player-number">${String(i + 1).padStart(2, '0')}</span></label>`).join('')}</div>${options()}<div class="start-area"><p id="setup-error" class="error" role="alert"></p>${button('start', `Start runde ${icon('arrow')}`, 'btn primary start-btn', !builtins.length ? 'disabled' : '')}<div id="start-summary">${selectionSummary()}</div></div><p class="sidebar-foot">Én av dere har allerede et mistenkelig ansikt.</p></aside></main>`; }
  function stageTop(step, title, subtitle) { return `<div class="stage-heading"><span class="eyebrow muted">RUNDE ${state.roundNumber} / ${step}</span><h1 tabindex="-1">${title}</h1><p>${subtitle}</p></div>`; }
  function secretContent(result = false) {
    if (game.secret.kind === 'image') return `<img class="secret-image" src="assets/secret-image.png" alt="Det hemmelige bildet">`;
    return `<strong class="secret-word ${result ? 'result-word' : ''}">${esc(game.secret.word)}</strong>`;
  }
  function reveal() {
    const p = game.players[game.revealIndex], visible = game.phase === 'word', imposter = game.imposters.includes(p.id);
    return `<main class="stage reveal-stage">${stageTop('HEMMELIGE ROLLER', visible ? 'Kun for dine øyne.' : `Gi mobilen til ${esc(p.name)}.`, visible ? 'Husk det du ser. Hold pokerfjeset.' : 'Sjekk at bare du ser skjermen før du åpner kortet.')}<div class="reveal-progress" aria-label="Spiller ${game.revealIndex + 1} av ${game.players.length}">${game.players.map((_, i) => `<span class="${i < game.revealIndex ? 'done' : i === game.revealIndex ? 'current' : ''}"></span>`).join('')}<small>${game.revealIndex + 1} / ${game.players.length}</small></div><div class="role-card ${visible ? 'revealed' : ''}"><div class="role-top">${avatar(p, game.revealIndex)}<strong>${esc(p.name)}</strong>${icon('lock')}</div><div class="role-content" ${visible ? 'data-secret' : ''}>${!visible ? `${mascot('card-mascot')}<h2>En liten hemmelighet.</h2><p>Et godt pokerfjes begynner her.</p>` : imposter ? `<span class="role-label imposter-label">DIN ROLLE</span><h2 class="imposter-title">Du er<br>imposteren.</h2><p>Du kjenner ikke ordet. Spill med.</p><div class="hint-box"><small>${game.hints ? 'DITT HINT' : 'UTEN HINT'}</small><strong>${game.hints ? esc(game.secret.hint) : 'Stol på bløffen.'}</strong></div>` : `<span class="role-label">DU ER PÅ LAG MED DE ANDRE</span><p>Det hemmelige ${game.secret.kind === 'image' ? 'bildet' : 'ordet'} er</p>${secretContent()}<small>Gi et hint som viser at du vet.</small>`}</div><div class="role-actions">${!visible ? button('show', `${icon('eye')} Vis min rolle`, 'btn primary') : button('next', `${icon('lock')} ${game.revealIndex === game.players.length - 1 ? 'Skjul og start spillet' : 'Skjul og send videre'}`, 'btn primary')}${game.seen && !visible ? button('next', 'Jeg husker rollen · gå videre', 'text-btn') : ''}</div></div><p class="privacy-note">${icon('lock')} Kortet skjules når du bytter fane.</p>${button('abort', 'Avbryt runden', 'text-btn quiet')}</main>`;
  }
  function clockValue() { return game.endAt && !game.paused ? Math.max(0, Math.ceil((game.endAt - Date.now()) / 1000)) : game.remaining; }
  function timeText(seconds) { return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`; }
  function roundScreen() {
    const starter = game.players.find(p => p.id === game.starterId) || game.players[0];
    return `<main class="stage">${stageTop('SNAKK SAMMEN', 'La bløffingen begynne.', 'Legg mobilen på bordet. Resten skjer mellom dere.')}<div class="discussion-art">${mascot()}<span class="bubble b1">Litt mistenkelig …</span><span class="bubble b2">Jeg vet jo ordet.</span></div><div class="starter">${avatar(starter, game.players.indexOf(starter))}<div><small>FØRSTE HINT</small><h2>${esc(starter.name)} begynner</h2></div>${icon('arrow')}</div><div class="round-steps"><p><b>1</b> Gi ett relatert hint hver.</p><p><b>2</b> Still spørsmål. Se etter bløffen.</p><p><b>3</b> Bli enige om én mistenkt.</p></div>${game.timerSeconds ? `<div class="timer-bar">${icon('history')}<strong id="timer-value" role="timer" aria-label="Tid igjen">${timeText(clockValue())}</strong>${button('pause', game.paused ? 'Fortsett' : 'Pause', 'text-btn')}<span id="timer-status">${clockValue() === 0 ? 'Tiden er ute – stem når dere er klare.' : 'til avstemning'}</span></div>` : ''}${button('vote', `Vi er ferdige · stem ${icon('arrow')}`, 'btn primary stage-cta')}${button('abort', 'Avbryt runden', 'text-btn quiet')}</main>`;
  }
  function vote() { return `<main class="stage">${stageTop('AVSTEMNING', 'Hvem bløffer?', 'Bli enige, og velg én spiller sammen.')}<div class="vote-list">${game.players.map((p, i) => `<button class="vote-card ${game.voteId === p.id ? 'selected' : ''}" data-vote="${esc(p.id)}" aria-pressed="${game.voteId === p.id}">${avatar(p, i)}<strong>${esc(p.name)}</strong><span class="selection">${icon('check')}</span></button>`).join('')}</div>${button('finish', `Avslør imposteren ${icon('eye')}`, 'btn primary stage-cta', !game.voteId ? 'disabled' : '')}${button('discussion', `${icon('back')} Diskuter litt til`, 'text-btn')}</main>`; }
  function scoresMarkup() { return `<div class="score-list">${[...state.players].sort((a, b) => b.score - a.score).map((p, i) => `<div class="score-row"><span class="rank">${i + 1}</span>${avatar(p, state.players.indexOf(p))}<strong>${esc(p.name)}</strong>${game?.result?.points.find(x => x.id === p.id)?.points ? `<small class="points-added">+${game.result.points.find(x => x.id === p.id).points}</small>` : ''}<b>${p.score}<small> poeng</small></b></div>`).join('')}</div>`; }
  function result() {
    const imp = game.players.find(p => game.imposters.includes(p.id)), caught = game.result.caught;
    return `<main class="stage result-stage">${stageTop('AVSLØRINGEN', game.allImposters ? 'Alle bløffet.' : caught ? 'Tatt på fersken.' : 'En perfekt bløff.', game.allImposters ? 'Den sjeldne kaosrunden! Alle var imposter.' : `<strong>${esc(imp.name)}</strong> var imposteren.`)}<div class="result-hero ${caught ? 'caught' : ''}">${mascot()}<span>${game.allImposters ? 'KAOSRUNDE · 0,5 %' : caught ? 'GJENGEN VANT' : 'IMPOSTEREN VANT'}</span></div><div class="answer"><small>${game.secret.kind === 'image' ? 'DET HEMMELIGE BILDET' : 'DET HEMMELIGE ORDET'}</small>${secretContent(true)}${game.hints ? `<p>Hint: ${esc(game.secret.hint)}</p>` : ''}</div><div class="score-heading"><h2>Kveldens poeng</h2><small>${game.allImposters ? '+1 til alle' : caught ? '+1 til alle som visste ordet' : '+2 til imposteren'}</small></div>${scoresMarkup()}${button('again', `En runde til ${icon('arrow')}`, 'btn primary stage-cta')}${button('setup', 'Endre spillere og kategorier', 'text-btn')}</main>`;
  }
  function resume() { return `<main class="stage">${stageTop('VELKOMMEN TILBAKE', 'Gjengen venter.', `Runde ${state.roundNumber} er lagret. Rollene er skjult.`)}<div class="resume-art">${mascot()}</div>${button('resume', `Fortsett runden ${icon('arrow')}`, 'btn primary stage-cta')}${button('abort', 'Avslutt og gå til oppsett', 'text-btn')}</main>`; }
  function render(focus = false) {
    clearInterval(timer);
    app.innerHTML = `<div class="app-shell ${screen === 'setup' ? '' : 'in-game'}">${header()}${({ setup, reveal, round: roundScreen, vote, result, resume })[screen]()}</div>`;
    if (screen === 'round' && game.timerSeconds) timer = setInterval(() => { const el = $('#timer-value'); if (el) { el.textContent = timeText(clockValue()); if (clockValue() === 0) $('#timer-status').textContent = 'Tiden er ute – stem når dere er klare.'; } }, 250);
    if (focus) { window.scrollTo({ top: 0, behavior: 'instant' }); $('main h1')?.focus({ preventScroll: true }); }
  }
  function start() {
    try { const next = E.createRound(state, allPacks()); state.history = next.history; state.roundNumber = next.roundNumber; game = next.game; screen = 'reveal'; save(); render(true); }
    catch (err) { if ($('#setup-error')) $('#setup-error').textContent = err.message; else toast(err.message); }
  }
  function coverSecret() { if (game?.stage === 'reveal' && game.phase === 'word') { game.phase = 'pass'; save(); if (screen === 'reveal') render(); } }
  function openDialog(title, body, actions = '') { coverSecret(); dialog.innerHTML = `<div class="modal-head"><h2>${title}</h2>${button('close', icon('close'), 'icon-btn', 'aria-label="Lukk"')}</div>${body}${actions}`; if (!dialog.open) dialog.showModal(); }
  function confirm(title, body, yes, action) { openDialog(title, `<p class="modal-intro">${body}</p>`, `<div class="modal-actions">${button('close', 'Behold', 'btn secondary')}${button(action, yes, 'btn danger')}</div>`); }
  function customEditor(id = null) {
    const p = state.customPacks.find(x => x.id === id);
    openDialog(p ? 'Deres kategori' : 'Lag en egen kategori', `<form id="custom-form" data-id="${esc(p?.id || '')}"><p class="modal-intro">Interne vitser, vennegjengen eller noe bare dere kan.</p><label class="form-label">Navn på kategorien<input id="custom-name" maxlength="40" required value="${esc(p?.name || '')}" placeholder="For eksempel: Hytteturen"></label><label class="form-label">Ord og hint<textarea id="custom-words" rows="8" required placeholder="Donut | Hull&#10;Hytte | Vedstabel&#10;Taco | Fredag">${esc(p?.words.map(w => `${w.word}${w.hint ? ` | ${w.hint}` : ''}`).join('\n') || '')}</textarea></label><p class="field-help">Ett ord per linje. Skriv <b>ord | hint</b> for å gi imposteren et hint. Ord uten hint kan brukes når hint er slått av.</p><p class="field-help">Ha minst 11 ulike ord for å unngå gjentakelser de neste 10 rundene.</p><p id="custom-error" class="error" role="alert"></p><div class="modal-actions">${p ? button('delete-pack', `${icon('trash')} Slett`, 'text-btn danger-text', `data-id="${esc(p.id)}"`) : ''}<button class="btn primary" type="submit">Lagre kategori ${icon('check')}</button></div></form>`);
  }
  function help() { openDialog('Slik spiller dere', `<div class="rules"><p><b>01. Del ut rollene.</b> Én mobil går på rundgang. Alle får samme ord, mens imposteren bare får et hint.</p><p><b>02. Gi hint.</b> Startspilleren velges tilfeldig. Gå rundt bordet, gi ett relatert hint hver og diskuter hvem som bløffer.</p><p><b>03. Stem sammen.</b> Velg én mistenkt. Treffer dere, får alle andre ett poeng. Slipper imposteren unna, får imposteren to.</p><p><b>Sjeldne overraskelser.</b> Med overraskelser på er det 0,5 % sjanse for at alle er imposter (+1 poeng til alle), 0,1 % for bilderunden og 0,1 % per spiller for at navnet blir ordet.</p><p>Ordene huskes i 10 runder. Egne kategorier med færre enn 11 ord starter om igjen når listen er brukt opp.</p><p class="field-help">Spillere, poeng og egne kategorier lagres i denne nettleseren. Ta sikkerhetskopi av egne kategorier før du bytter enhet eller sletter nettleserdata.</p></div><div class="utility-actions">${button('export', `${icon('download')} Eksporter egne kategorier`, 'btn secondary')}${button('import', 'Importer kategorier', 'btn secondary')}<input id="import-file" type="file" accept="application/json,.json" hidden>${button('install', 'Legg på hjemskjermen', 'text-btn')}</div>`); }
  function exportPacks() { const blob = new Blob([JSON.stringify({ version: 2, categories: state.customPacks }, null, 2)], { type: 'application/json' }), url = URL.createObjectURL(blob), a = document.createElement('a'); a.href = url; a.download = 'imposter-mine-kategorier.json'; a.click(); setTimeout(() => URL.revokeObjectURL(url), 2000); }
  const actions = {
    home() { if (game && screen !== 'result' && screen !== 'setup') actions.abort(); else actions.setup(); },
    setup() { screen = 'setup'; game = null; save(); render(true); },
    start, again: start,
    plus() { if (state.players.length < 12) { let n = state.players.length + 1; while (state.players.some(p => E.normalize(p.name) === E.normalize(`Spiller ${n}`))) n++; state.players.push({ id: E.uid(), name: `Spiller ${n}`, score: 0 }); save(); render(); } },
    minus() { if (state.players.length > 3) { state.players.pop(); save(); render(); } },
    show() { if (screen !== 'reveal' || game.phase !== 'pass') return; game.phase = 'word'; game.seen = true; save(); render(); },
    next() { if (screen !== 'reveal' || !game.seen) return; game.phase = 'pass'; game.seen = false; if (++game.revealIndex >= game.players.length) { game.revealIndex = game.players.length - 1; game.stage = 'round'; screen = 'round'; if (game.timerSeconds) game.endAt = Date.now() + game.timerSeconds * 1000; } save(); render(true); },
    vote() { game.stage = 'vote'; screen = 'vote'; save(); render(true); },
    discussion() { game.stage = 'round'; screen = 'round'; save(); render(true); },
    finish() { if (screen !== 'vote') return; try { E.finishRound(state, game); screen = 'result'; save(); render(true); } catch (err) { toast(err.message); } },
    pause() { if (game.paused) { game.endAt = Date.now() + game.remaining * 1000; game.paused = false; } else { game.remaining = clockValue(); game.paused = true; } save(); render(); },
    abort() { confirm('Avslutte runden?', 'Runden avsluttes uten nye poeng. Spillere og innstillinger beholdes.', 'Avslutt runden', 'confirm-abort'); },
    'confirm-abort'() { dialog.close(); actions.setup(); },
    resume() { screen = game.stage; game.phase = 'pass'; render(true); },
    scores() { openDialog('Kveldens poengtavle', scoresMarkup(), button('reset-scores', 'Nullstill poeng', 'text-btn')); },
    'reset-scores'() { if (game && game.stage !== 'result') { toast('Avslutt runden før du nullstiller poengene.'); return; } confirm('Nullstille poengene?', 'Alle spillerne starter på null. Navn og kategorier beholdes.', 'Nullstill', 'confirm-reset'); },
    'confirm-reset'() { state.players.forEach(p => p.score = 0); if (game?.result) game.result.points = []; save(); dialog.close(); render(); },
    help, custom() { customEditor(); }, close() { dialog.close(); },
    'delete-pack'(b) { const id = b.dataset.id; confirm('Slette kategorien?', 'Denne kategorien fjernes fra nettleseren din.', 'Slett kategori', 'confirm-delete'); dialog.dataset.deleteId = id; },
    'confirm-delete'() { state.customPacks = state.customPacks.filter(p => p.id !== dialog.dataset.deleteId); reconcile(); save(); dialog.close(); render(); },
    export: exportPacks,
    import() { $('#import-file')?.click(); },
    async install() { if (installPrompt) { await installPrompt.prompt(); installPrompt = null; } else toast(location.protocol === 'file:' ? 'For installering på mobil må spillet åpnes fra en nettadresse.' : 'iPhone: Del → Legg til på Hjem-skjerm. Android: nettlesermeny → Installer app / Legg til på startskjermen.', 7000); }
  };
  function click(event) {
    const b = event.target.closest('button'); if (!b || b.disabled) return;
    if (event.detail > 1) return;
    if (b.dataset.action) {
      const fastGuard = ['show', 'next', 'start', 'again', 'finish'];
      if (fastGuard.includes(b.dataset.action)) { if (performance.now() - lastAction < 400) return; lastAction = performance.now(); }
      actions[b.dataset.action]?.(b);
    } else if (b.dataset.pack) {
      const id = b.dataset.pack;
      if (state.selected.includes(id)) { if (state.selected.length === 1) return toast('Minst én kategori må være valgt.'); state.selected = state.selected.filter(x => x !== id); } else state.selected.push(id);
      save(); $('#category-grid').innerHTML = categoryCards(); $('#start-summary').innerHTML = selectionSummary();
    } else if (b.dataset.view) { view = b.dataset.view; categorySearch = ''; render(); $(`[data-view="${view}"]`)?.focus(); }
    else if (b.dataset.edit) customEditor(b.dataset.edit);
    else if (b.dataset.vote && screen === 'vote') { game.voteId = b.dataset.vote; save(); render(); $(`[data-vote="${CSS.escape(game.voteId)}"]`)?.focus(); }
  }
  document.addEventListener('click', click);
  document.addEventListener('input', e => {
    if (e.target.id === 'category-search') { categorySearch = e.target.value; $('#category-grid').innerHTML = categoryCards(); }
    if (e.target.dataset.player) { const p = state.players.find(p => p.id === e.target.dataset.player); if (p) { p.name = e.target.value; save(); } $('#setup-error').textContent = ''; }
  });
  document.addEventListener('change', async e => {
    const key = e.target.dataset.setting;
    if (key) { state.settings[key] = key === 'timer' ? Number(e.target.value) : e.target.checked; save(); }
    if (e.target.id === 'import-file' && e.target.files[0]) {
      try { const file = e.target.files[0]; if (file.size > 128 * 1024 * 1024) throw new Error('Filen er for stor. Maks 128 MB.'); const parsed = JSON.parse(await file.text()), packs = E.cleanPacks(Array.isArray(parsed) ? parsed : parsed.categories); if (!packs.length) throw new Error('Filen inneholder ingen gyldige kategorier.'); if (state.customPacks.length + packs.length > 50) throw new Error('Maks 50 egne kategorier.'); packs.forEach(p => p.id = `custom-${E.uid()}`); state.customPacks.push(...packs); save(); dialog.close(); render(); toast(`${packs.length} kategorier importert.`); } catch (err) { toast(err.message, 5000); }
    }
  });
  document.addEventListener('submit', e => {
    if (e.target.id !== 'custom-form') return; e.preventDefault();
    const name = $('#custom-name').value.trim(), source = $('#custom-words').value, lines = source.split(/\r?\n/).filter(l => l.trim());
    const words = E.cleanWords(lines.map(line => { const [word, ...hint] = line.split('|'); return { word: word.trim(), hint: hint.join('|').trim() }; }));
    if (!name || !words.length) { $('#custom-error').textContent = 'Skriv et kategorinavn og minst ett ord.'; return; }
    const id = e.target.dataset.id || `custom-${E.uid()}`;
    if (state.customPacks.some(p => E.normalize(p.name) === E.normalize(name) && p.id !== id)) { $('#custom-error').textContent = 'Du har allerede en kategori med dette navnet.'; return; }
    if (!e.target.dataset.id && state.customPacks.length >= 50) { $('#custom-error').textContent = 'Du kan ha opptil 50 egne kategorier.'; return; }
    const pack = { id, name, words, custom: true, icon: 'spark', description: 'Laget av dere' };
    const index = state.customPacks.findIndex(p => p.id === id); if (index < 0) state.customPacks.push(pack); else state.customPacks[index] = pack;
    state.selected = [id]; view = 'custom'; categorySearch = ''; const stored = save(); dialog.close(); render();
    if (stored) toast(`Kategorien er lagret.${words.length < lines.length ? ' Duplikater ble fjernet.' : ''}`);
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) coverSecret(); });
  window.addEventListener('blur', coverSecret);
  window.addEventListener('pagehide', coverSecret);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') coverSecret(); });
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); installPrompt = e; });
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    navigator.serviceWorker.register('sw.js', { updateViaCache: 'none' }).then(reg => reg.update()).catch(() => {});
  }
  if (!builtins.length) { app.innerHTML = '<main class="stage"><h1>Ordlistene mangler.</h1><p>Pakk ut hele spillmappen og åpne index.html på nytt.</p></main>'; return; }
  render();
  if (storageError) toast('Lagring er utilgjengelig i denne nettleseren. Du kan fortsatt spille.', 6000);
})();
