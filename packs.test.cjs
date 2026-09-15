const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const E = require('./engine.js');
const root = __dirname;
const packFiles = fs.readdirSync(root).filter(f => /^packs-.*\.js$/.test(f));
for (const f of packFiles) require(path.join(root, f));
const packs = globalThis.IMPOSTER_PACKS;

test('24 distinct complete categories, each with over 200 valid word/hint pairs', () => {
  assert.equal(packs.length, 24);
  assert.equal(new Set(packs.map(p => p.id)).size, 24);
  assert.equal(new Set(packs.map(p => E.normalize(p.name))).size, 24);
  for (const p of packs) {
    assert.ok(p.words.length >= (p.id === 'characters' ? 301 : 201), p.name);
    assert.equal(E.cleanWords(p.words).length, p.words.length, p.name + ': invalid or duplicate words');
    for (const {word, hint} of p.words) {
      assert.ok(word.trim() && hint.trim(), p.name + ': blank field');
      assert.notEqual(E.normalize(word), E.normalize(hint), word + ': hint reveals answer');
      assert.ok(!/^[a-zæøå] \+ \d+$/i.test(hint), word + ': letter-count hint');
    }
  }
});

test('every shipped category can supply a playable round with its matching hint', () => {
  for (const p of packs) {
    const state = E.defaults(); state.selected = [p.id]; state.settings.surprises = false;
    const {game: round} = E.createRound(state, packs);
    const entry = p.words.find(w => E.normalize(w.word) === E.normalize(round.secret.word));
    assert.ok(entry, p.name + ': word outside selection');
    assert.equal(round.secret.hint, entry.hint);
  }
});

test('all category scripts are in the page and coherent offline release', () => {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const worker = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');
  const version = require('./package.json').version;
  for (const f of packFiles) {
    assert.ok(html.includes(f + '?v=' + version), f + ': missing in page');
    assert.ok(worker.includes(f + '?v=' + version), f + ': missing in offline cache');
  }
  assert.ok(worker.includes('imposter-v' + version));
});

test('all 24 built-ins and 50 custom category selections survive a reload', () => {
  const state = E.defaults();
  state.customPacks = Array.from({length:50}, (_, i) => ({id:'custom-'+i, name:'Egen '+i, words:[{word:'Ord',hint:'Hint'}]}));
  state.selected = [...packs, ...state.customPacks].map(p => p.id);
  assert.deepEqual(E.restore(JSON.parse(JSON.stringify(state))).selected, state.selected);
});
