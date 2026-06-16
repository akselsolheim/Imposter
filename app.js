const WORD_PACKS = {
  mixed: {
    name: "Blandet",
    vibe: "Lett \u00e5 starte med",
    words: [
      "pizza",
      "fotball",
      "strand",
      "skole",
      "kino",
      "sn\u00f8",
      "taco",
      "tog",
      "mobil",
      "bursdag",
      "hytte",
      "musikk",
      "butikk",
      "ferie",
      "kaffe",
      "regn",
      "spill",
      "hund",
      "sykkel",
      "flyplass"
    ]
  },
  food: {
    name: "Mat",
    vibe: "Sultne hint",
    words: [
      "burger",
      "sushi",
      "pannekake",
      "sjokolade",
      "brus",
      "is",
      "lasagne",
      "eple",
      "kebab",
      "nudler",
      "gr\u00f8t",
      "salat",
      "vaffel",
      "ost",
      "smoothie",
      "popcorn"
    ]
  },
  places: {
    name: "Steder",
    vibe: "Hvor er vi?",
    words: [
      "bibliotek",
      "sv\u00f8mmehall",
      "fjell",
      "fly",
      "restaurant",
      "park",
      "butikk",
      "museum",
      "hotell",
      "busstopp",
      "treningssenter",
      "klasserom",
      "dyrehage",
      "kino",
      "sykehus",
      "stadion"
    ]
  },
  animals: {
    name: "Dyr",
    vibe: "Lett \u00e5 mime",
    words: [
      "katt",
      "hest",
      "l\u00f8ve",
      "pingvin",
      "hai",
      "kanin",
      "\u00f8rn",
      "slange",
      "elefant",
      "frosk",
      "bj\u00f8rn",
      "ape",
      "rev",
      "ku",
      "sau",
      "ulv"
    ]
  },
  gaming: {
    name: "Gaming",
    vibe: "For spillkveld",
    words: [
      "Minecraft",
      "Fortnite",
      "Roblox",
      "boss",
      "loot",
      "spawn",
      "level",
      "controller",
      "speedrun",
      "skin",
      "lag",
      "checkpoint",
      "battle pass",
      "headset",
      "server",
      "rank"
    ]
  },
  sports: {
    name: "Sport",
    vibe: "Full konkurranse",
    words: [
      "fotball",
      "basket",
      "ski",
      "tennis",
      "sv\u00f8mming",
      "m\u00e5l",
      "dommer",
      "keeper",
      "trening",
      "medalje",
      "l\u00f8ping",
      "sykkel",
      "h\u00e5ndball",
      "sk\u00f8yter",
      "volleyball",
      "kamp"
    ]
  },
  school: {
    name: "Skole",
    vibe: "Klasseromskaos",
    words: [
      "lekse",
      "pr\u00f8ve",
      "friminutt",
      "l\u00e6rer",
      "blyant",
      "matte",
      "gym",
      "kantine",
      "sekk",
      "tavle",
      "klasse",
      "prosjekt",
      "karakter",
      "bok",
      "gruppe",
      "timeplan"
    ]
  },
  movies: {
    name: "Film og TV",
    vibe: "Popcornmodus",
    words: [
      "superhelt",
      "skurk",
      "drage",
      "romskip",
      "detektiv",
      "zombie",
      "komedie",
      "trailer",
      "kino",
      "serie",
      "episode",
      "finale",
      "Oscar",
      "regiss\u00f8r",
      "scene",
      "helt"
    ]
  },
  summer: {
    name: "Sommer",
    vibe: "Ferieord",
    words: [
      "is",
      "solbriller",
      "strand",
      "badeball",
      "grill",
      "ferie",
      "camping",
      "b\u00e5t",
      "sand",
      "limonade",
      "syden",
      "solkrem",
      "hytte",
      "festival",
      "vannmelon",
      "basseng"
    ]
  }
};

const RELATED_HINTS = {
  pizza: "ost",
  fotball: "gress",
  strand: "sand",
  skole: "pult",
  kino: "popcorn",
  sn\u00f8: "kaldt",
  taco: "skjell",
  tog: "skinner",
  mobil: "lomme",
  bursdag: "lys",
  hytte: "peis",
  musikk: "rytme",
  butikk: "kurv",
  ferie: "koffert",
  kaffe: "kopp",
  regn: "paraply",
  spill: "poeng",
  hund: "b\u00e5nd",
  sykkel: "pedal",
  flyplass: "bagasje",
  burger: "br\u00f8d",
  sushi: "ris",
  pannekake: "sirup",
  sjokolade: "kakao",
  brus: "bobler",
  is: "kjeks",
  lasagne: "lag",
  eple: "kjerne",
  kebab: "rull",
  nudler: "spisepinner",
  gr\u00f8t: "kanel",
  salat: "blad",
  vaffel: "hjerte",
  ost: "gul",
  smoothie: "suger\u00f8r",
  popcorn: "salt",
  bibliotek: "stille",
  sv\u00f8mmehall: "klor",
  fjell: "topp",
  fly: "vinge",
  restaurant: "meny",
  park: "benk",
  museum: "utstilling",
  hotell: "n\u00f8kkel",
  busstopp: "rute",
  treningssenter: "vekter",
  klasserom: "tavle",
  dyrehage: "bur",
  sykehus: "lege",
  stadion: "tribune",
  katt: "v\u00e6rh\u00e5r",
  hest: "sal",
  l\u00f8ve: "mane",
  pingvin: "is",
  hai: "finne",
  kanin: "gulrot",
  \u00f8rn: "vinge",
  slange: "skjell",
  elefant: "snabel",
  frosk: "dam",
  bj\u00f8rn: "honning",
  ape: "banan",
  rev: "hale",
  ku: "melk",
  sau: "ull",
  ulv: "m\u00e5ne",
  minecraft: "blokker",
  fortnite: "storm",
  roblox: "avatar",
  boss: "finale",
  loot: "kiste",
  spawn: "start",
  level: "stige",
  controller: "knapp",
  speedrun: "tid",
  skin: "utseende",
  lag: "forsinkelse",
  checkpoint: "flagg",
  "battle pass": "bel\u00f8nning",
  headset: "lyd",
  server: "online",
  rank: "niv\u00e5",
  basket: "kurv",
  ski: "staver",
  tennis: "racket",
  sv\u00f8mming: "basseng",
  m\u00e5l: "nett",
  dommer: "fl\u00f8yte",
  keeper: "hansker",
  trening: "svette",
  medalje: "gull",
  l\u00f8ping: "sko",
  h\u00e5ndball: "klister",
  sk\u00f8yter: "is",
  volleyball: "nett",
  kamp: "lag",
  lekse: "bok",
  pr\u00f8ve: "karakter",
  friminutt: "pause",
  l\u00e6rer: "forklaring",
  blyant: "spiss",
  matte: "tall",
  gym: "ball",
  kantine: "mat",
  sekk: "glidel\u00e5s",
  tavle: "kritt",
  klasse: "gruppe",
  prosjekt: "presentasjon",
  karakter: "bokstav",
  bok: "side",
  gruppe: "samarbeid",
  timeplan: "timer",
  superhelt: "kappe",
  skurk: "plan",
  drage: "ild",
  romskip: "stjerner",
  detektiv: "spor",
  zombie: "hjerne",
  komedie: "latter",
  trailer: "klipp",
  serie: "sesong",
  episode: "del",
  finale: "slutt",
  oscar: "pris",
  regiss\u00f8r: "kamera",
  scene: "lys",
  helt: "redning",
  solbriller: "glass",
  badeball: "luft",
  grill: "kull",
  camping: "telt",
  b\u00e5t: "anker",
  sand: "korn",
  limonade: "sitron",
  syden: "varme",
  solkrem: "faktor",
  festival: "scene",
  vannmelon: "fr\u00f8",
  basseng: "klor",
  donut: "hull"
};

const SAVED_CATEGORIES_KEY = "imposterSavedCategories";

function loadSavedCategories() {
  try {
    const saved = JSON.parse(localStorage.getItem(SAVED_CATEGORIES_KEY) || "[]");
    return Array.isArray(saved) ? saved.filter((pack) => pack && pack.id && pack.name && Array.isArray(pack.words)) : [];
  } catch {
    return [];
  }
}

function storeSavedCategories() {
  try {
    localStorage.setItem(SAVED_CATEGORIES_KEY, JSON.stringify(state.savedPacks));
  } catch {
    // Appen fungerer fortsatt, men kategorien blir bare lagret for denne \u00f8kten.
  }
}

const state = {
  screen: "setup",
  playerCount: 5,
  players: ["Spiller 1", "Spiller 2", "Spiller 3", "Spiller 4", "Spiller 5"],
  pack: "mixed",
  customWords: "",
  newCategoryName: "",
  newCategoryWords: "",
  editingCategoryId: null,
  savedPacks: loadSavedCategories(),
  scores: {},
  game: null
};

const app = document.querySelector("#app");

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function normalizeWords(value) {
  return value
    .split(/\n|,/)
    .map((word) => word.trim())
    .filter(Boolean);
}

function currentWords() {
  return allPacks()[state.pack]?.words || WORD_PACKS.mixed.words;
}

function allPacks() {
  const saved = Object.fromEntries(
    state.savedPacks.map((pack) => [
      pack.id,
      {
        name: pack.name,
        vibe: "Din kategori",
        words: pack.words,
        saved: true
      }
    ])
  );
  return { ...WORD_PACKS, ...saved };
}

function saveCategory() {
  const name = state.newCategoryName.trim();
  const words = normalizeWords(state.newCategoryWords);
  if (!name || words.length < 1) return;

  if (state.editingCategoryId) {
    state.savedPacks = state.savedPacks.map((pack) =>
      pack.id === state.editingCategoryId ? { ...pack, name, words } : pack
    );
    storeSavedCategories();
    state.pack = state.editingCategoryId;
    state.editingCategoryId = null;
    state.newCategoryName = "";
    state.newCategoryWords = "";
    render();
    return;
  }

  const id = `saved-${Date.now()}`;
  state.savedPacks.push({ id, name, words });
  storeSavedCategories();
  state.pack = id;
  state.newCategoryName = "";
  state.newCategoryWords = "";
  render();
}

function editSavedCategory(id) {
  const pack = state.savedPacks.find((savedPack) => savedPack.id === id);
  if (!pack) return;
  state.editingCategoryId = id;
  state.newCategoryName = pack.name;
  state.newCategoryWords = pack.words.join("\n");
  state.pack = id;
  render();
}

function cancelCategoryEdit() {
  state.editingCategoryId = null;
  state.newCategoryName = "";
  state.newCategoryWords = "";
  render();
}

function deleteSavedCategory(id) {
  state.savedPacks = state.savedPacks.filter((pack) => pack.id !== id);
  storeSavedCategories();
  if (state.pack === id) state.pack = "mixed";
  if (state.editingCategoryId === id) {
    state.editingCategoryId = null;
    state.newCategoryName = "";
    state.newCategoryWords = "";
  }
  render();
}

function relatedHint(word) {
  const key = String(word).trim().toLowerCase();
  if (RELATED_HINTS[key]) return RELATED_HINTS[key];

  const categoryFallbacks = {
    mixed: ["ting", "hverdag", "minne"],
    food: ["smak", "tallerken", "kj\u00f8kken"],
    places: ["kart", "d\u00f8r", "adresse"],
    animals: ["natur", "spor", "lyd"],
    gaming: ["skjerm", "knapp", "poeng"],
    sports: ["lag", "bane", "tempo"],
    school: ["pult", "pause", "notat"],
    movies: ["kamera", "scene", "rolle"],
    summer: ["sol", "varme", "fri"]
  };
  return pick(categoryFallbacks[state.pack] || ["n\u00e6rme", "id\u00e9", "ting"]);
}

function ensurePlayers() {
  while (state.players.length < state.playerCount) {
    state.players.push(`Spiller ${state.players.length + 1}`);
  }
  state.players = state.players.slice(0, state.playerCount);
  state.players.forEach((name) => {
    if (!(name in state.scores)) state.scores[name] = 0;
  });
}

function startGame() {
  ensurePlayers();
  const words = currentWords();
  if (words.length < 1) return;

  const allImposters = Math.random() < 0.005;
  const imposterIndex = allImposters ? -1 : Math.floor(Math.random() * state.players.length);
  const word = pick(words);
  const turnOrder = shuffle(state.players);

  state.game = {
    word,
    hint: relatedHint(word),
    allImposters,
    imposterIndex,
    revealIndex: 0,
    phase: "pass",
    turnOrder,
    turnIndex: 0,
    selectedVote: null
  };
  state.screen = "reveal";
  render();
}

function playerRole(index) {
  if (state.game.allImposters) return "imposter";
  return index === state.game.imposterIndex ? "imposter" : "citizen";
}

function activeRevealPlayer() {
  return {
    name: state.players[state.game.revealIndex],
    index: state.game.revealIndex
  };
}

function nextRevealStep() {
  if (state.game.phase === "pass") {
    state.game.phase = "word";
  } else if (state.game.revealIndex < state.players.length - 1) {
    state.game.revealIndex += 1;
    state.game.phase = "pass";
  } else {
    state.screen = "round";
  }
  render();
}

function vote(player) {
  state.game.selectedVote = player;
  render();
}

function finishVote() {
  if (state.game.allImposters) {
    state.players.forEach((player) => {
      state.scores[player] = (state.scores[player] || 0) + 1;
    });
    state.screen = "result";
    render();
    return;
  }

  const imposter = state.players[state.game.imposterIndex];
  const caught = state.game.selectedVote === imposter;
  if (caught) {
    state.players.forEach((player) => {
      if (player !== imposter) state.scores[player] = (state.scores[player] || 0) + 1;
    });
  } else {
    state.scores[imposter] = (state.scores[imposter] || 0) + 2;
  }
  state.screen = "result";
  render();
}

function resetAll() {
  state.screen = "setup";
  state.game = null;
  render();
}

function topbar(extra = "") {
  return `
    <div class="topbar">
      <div class="brand"><span class="mark">?</span><span>Imposter</span></div>
      ${extra}
    </div>
  `;
}

function setupScreen() {
  ensurePlayers();
  const packs = allPacks();
  const selectedPack = packs[state.pack] || WORD_PACKS.mixed;
  const packCards = Object.entries(packs)
    .map(
      ([id, pack]) => `
        <div class="category-wrap">
          <button class="category-card ${state.pack === id ? "selected" : ""}" data-pack="${id}" type="button">
            <span class="category-name">${escapeHtml(pack.name)}</span>
            <span class="category-vibe">${escapeHtml(pack.vibe)}</span>
            <span class="category-count">${pack.words.length} ord</span>
          </button>
          ${
            pack.saved
              ? `<div class="category-tools">
                  <button class="mini-action" data-edit-pack="${id}" type="button" aria-label="Rediger ${escapeHtml(pack.name)}">Rediger</button>
                  <button class="mini-action danger" data-delete-pack="${id}" type="button" aria-label="Slett ${escapeHtml(pack.name)}">Slett</button>
                </div>`
              : ""
          }
        </div>
      `
    )
    .join("");

  return `
    <section class="screen">
      ${topbar('<span class="pill">Pass mobilen</span>')}
      <div class="hero">
        <div class="hero-copy">
          <h1>Finn imposteren</h1>
          <p class="lead">Alle f\u00e5r samme hemmelige ord, bortsett fra \u00e9n imposter. Gi hint, lytt godt, og stem ut den som later som.</p>
        </div>
        <img class="hero-art" src="assets/party-cards.svg" alt="Fargerike spillkort" />
      </div>

      <div class="panel setup">
        <div class="field">
          <div class="label-row">
            <span class="label">Spillere</span>
            <span class="pill">${state.playerCount} med</span>
          </div>
          <div class="stepper">
            <button class="icon-btn" data-action="minus" aria-label="F\u00e6rre spillere">-</button>
            <div class="count">${state.playerCount}</div>
            <button class="icon-btn" data-action="plus" aria-label="Flere spillere">+</button>
          </div>
        </div>

        <div class="field">
          <div class="label-row">
            <span class="label">Kategori</span>
            <span class="pill">${selectedPack.words.length} ord</span>
          </div>
          <div class="category-grid">${packCards}</div>
        </div>

        <div class="custom-builder">
          <div class="label-row">
            <span class="label">${state.editingCategoryId ? "Rediger kategori" : "Lag egen kategori"}</span>
            <span class="pill">${state.editingCategoryId ? "endrer" : "lagres"}</span>
          </div>
          <input id="newCategoryName" value="${escapeHtml(state.newCategoryName)}" placeholder="Navn p\u00e5 kategori" aria-label="Navn p\u00e5 ny kategori" />
          <textarea id="newCategoryWords" placeholder="Skriv ett ord per linje">${escapeHtml(state.newCategoryWords)}</textarea>
          <div class="builder-actions">
            <button class="primary-btn" data-action="saveCategory" type="button">${state.editingCategoryId ? "Lagre endringer" : "Lagre kategori"}</button>
            ${state.editingCategoryId ? `<button class="ghost-btn" data-action="cancelCategoryEdit" type="button">Avbryt</button>` : ""}
          </div>
          <p class="hint">${state.editingCategoryId ? "Endringene lagres p\u00e5 den samme kategorien." : "N\u00e5r du lagrer, dukker kategorien opp sammen med de andre og blir v\u00e6rende neste gang du \u00e5pner appen."}</p>
        </div>

        <div class="field">
          <span class="label">Navn</span>
          <div class="player-list">
            ${state.players
              .map(
                (player, index) => `
                  <div class="player-row">
                    <span class="avatar">${index + 1}</span>
                    <input data-player="${index}" value="${escapeHtml(player)}" aria-label="Navn p\u00e5 spiller ${index + 1}" />
                  </div>
                `
              )
              .join("")}
          </div>
        </div>

        <button class="primary-btn" data-action="start">Start runde</button>
      </div>
    </section>
  `;
}

function revealScreen() {
  const { name, index } = activeRevealPlayer();
  const role = playerRole(index);
  const progress = Math.round(((state.game.revealIndex + (state.game.phase === "word" ? 1 : 0)) / state.players.length) * 100);

  if (state.game.phase === "pass") {
    return `
      <section class="screen">
        ${topbar(`<span class="pill">${state.game.revealIndex + 1}/${state.players.length}</span>`)}
        <div class="progress">
          <div class="progress-track"><div class="progress-fill" style="width: ${progress}%"></div></div>
        </div>
        <div class="panel pass-card">
          <p class="hint">Gi mobilen til</p>
          <div class="pass-name">${escapeHtml(name)}</div>
          <p class="lead">Trykk n\u00e5r bare denne spilleren ser skjermen.</p>
          <button class="primary-btn" data-action="showWord">Vis min rolle</button>
        </div>
      </section>
    `;
  }

  return `
    <section class="screen">
      ${topbar(`<span class="pill">${state.game.revealIndex + 1}/${state.players.length}</span>`)}
      <div class="panel word-card">
        <p class="hint">${escapeHtml(name)}, dette er hemmelig.</p>
        <div class="secret">
          ${
            role === "imposter"
              ? `<div class="big-role imposter-word">Du er imposteren</div><p class="hint">Hint: <strong>${escapeHtml(state.game.hint)}</strong></p>`
              : `<p class="hint">Ordet er</p><div class="secret-word">${escapeHtml(state.game.word)}</div>`
          }
        </div>
        <button class="primary-btn" data-action="nextReveal">Skjul og send videre</button>
      </div>
    </section>
  `;
}

function roundScreen() {
  return `
    <section class="screen">
      ${topbar('<button class="ghost-btn" data-action="setup">Ny runde</button>')}
      <div class="panel round-card">
        <div class="party-stamp">Rollene er delt ut</div>
        <h2>Spill i person</h2>
        <p class="lead">Legg bort mobilen litt. Snakk, gi hint og pr\u00f8v \u00e5 finne ut hvem som faker. N\u00e5r dere er klare, trykker dere videre til avstemning.</p>
        <div class="table-card">
          <strong>${state.players.length} spillere er med</strong>
          <span>\u00c9n skjult imposter. Kanskje.</span>
        </div>
        <button class="danger-btn" data-action="toVote">Vi er ferdige</button>
      </div>
    </section>
  `;
}

function voteScreen() {
  return `
    <section class="screen">
      ${topbar('<span class="pill">Avstemning</span>')}
      <div class="panel round-card">
        <h2>Hvem er imposter?</h2>
        <p class="lead">Diskuter f\u00f8rst. N\u00e5r dere er enige, velg \u00e9n spiller og avsl\u00f8r svaret.</p>
        <div class="vote-list">
          ${state.players
            .map(
              (player) => `
                <button class="vote-btn ${state.game.selectedVote === player ? "selected" : ""}" data-vote="${escapeHtml(player)}">
                  ${escapeHtml(player)}
                </button>
              `
            )
            .join("")}
        </div>
        <button class="danger-btn" data-action="finishVote" ${state.game.selectedVote ? "" : "disabled"}>Avsl\u00f8r</button>
      </div>
    </section>
  `;
}

function resultScreen() {
  const imposter = state.game.allImposters ? null : state.players[state.game.imposterIndex];
  const caught = !state.game.allImposters && state.game.selectedVote === imposter;
  const sortedScores = [...state.players].sort((a, b) => (state.scores[b] || 0) - (state.scores[a] || 0));

  if (state.game.allImposters) {
    return `
      <section class="screen">
        ${topbar('<span class="pill">Kaosrunde</span>')}
        <div class="panel result-card chaos-card">
          <span class="result-badge bad">0,5% sjanse</span>
          <h2>Alle var imposter</h2>
          <p class="lead">Ingen hadde det ekte ordet. Ordet bak hintene var <strong>${escapeHtml(state.game.word)}</strong>. Alle f\u00e5r 1 poeng for \u00e5 overleve kaoset.</p>
          <div class="score-list">
            ${sortedScores
              .map(
                (player) => `
                  <div class="score-row">
                    <strong>${escapeHtml(player)}</strong>
                    <span class="pill">${state.scores[player] || 0} poeng</span>
                  </div>
                `
              )
              .join("")}
          </div>
          <div class="secondary-actions">
            <button class="primary-btn" data-action="playAgain">Spill igjen</button>
            <button class="ghost-btn" data-action="setup">Endre spill</button>
          </div>
        </div>
      </section>
    `;
  }

  return `
    <section class="screen">
      ${topbar('<span class="pill">Resultat</span>')}
      <div class="panel result-card">
        <span class="result-badge ${caught ? "" : "bad"}">${caught ? "Imposteren ble tatt" : "Imposteren slapp unna"}</span>
        <h2>${escapeHtml(imposter)} var imposteren</h2>
        <p class="lead">Ordet var <strong>${escapeHtml(state.game.word)}</strong>. ${caught ? "Alle andre f\u00e5r 1 poeng." : `${escapeHtml(imposter)} f\u00e5r 2 poeng.`}</p>
        <div class="score-list">
          ${sortedScores
            .map(
              (player) => `
                <div class="score-row">
                  <strong>${escapeHtml(player)}</strong>
                  <span class="pill">${state.scores[player] || 0} poeng</span>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="secondary-actions">
          <button class="primary-btn" data-action="playAgain">Spill igjen</button>
          <button class="ghost-btn" data-action="setup">Endre spill</button>
        </div>
      </div>
    </section>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function render() {
  const screens = {
    setup: setupScreen,
    reveal: revealScreen,
      round: roundScreen,
    vote: voteScreen,
    result: resultScreen
  };
  app.innerHTML = screens[state.screen]();
  bindEvents();
}

function bindEvents() {
  app.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      if (action === "minus") {
        state.playerCount = Math.max(3, state.playerCount - 1);
        render();
      }
      if (action === "plus") {
        state.playerCount = Math.min(12, state.playerCount + 1);
        render();
      }
      if (action === "start") startGame();
      if (action === "showWord") nextRevealStep();
      if (action === "nextReveal") nextRevealStep();
      if (action === "toVote") {
        state.screen = "vote";
        render();
      }
      if (action === "finishVote") finishVote();
      if (action === "playAgain") startGame();
      if (action === "setup") resetAll();
      if (action === "saveCategory") saveCategory();
      if (action === "cancelCategoryEdit") cancelCategoryEdit();
    });
  });

  app.querySelectorAll("[data-pack]").forEach((button) => {
    button.addEventListener("click", () => {
      state.pack = button.dataset.pack;
      render();
    });
  });

  app.querySelectorAll("[data-delete-pack]").forEach((button) => {
    button.addEventListener("click", () => deleteSavedCategory(button.dataset.deletePack));
  });

  app.querySelectorAll("[data-edit-pack]").forEach((button) => {
    button.addEventListener("click", () => editSavedCategory(button.dataset.editPack));
  });

  const newCategoryName = app.querySelector("#newCategoryName");
  if (newCategoryName) {
    newCategoryName.addEventListener("input", (event) => {
      state.newCategoryName = event.target.value;
    });
  }

  const newCategoryWords = app.querySelector("#newCategoryWords");
  if (newCategoryWords) {
    newCategoryWords.addEventListener("input", (event) => {
      state.newCategoryWords = event.target.value;
    });
  }

  app.querySelectorAll("[data-player]").forEach((input) => {
    input.addEventListener("input", (event) => {
      const index = Number(event.target.dataset.player);
      state.players[index] = event.target.value.trim() || `Spiller ${index + 1}`;
    });
  });

  app.querySelectorAll("[data-vote]").forEach((button) => {
    button.addEventListener("click", () => vote(button.dataset.vote));
  });
}

render();
