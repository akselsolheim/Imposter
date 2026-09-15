// Bump VERSION and asset query strings together when publishing a new build.
const VERSION = 'imposter-v2.1.0';
const FILES = ['./', './index.html', './styles.css?v=2.1.0', './engine.js?v=2.1.0', './app.js?v=2.1.0', './packs-world.js?v=2.1.0', './packs-culture.js?v=2.1.0', './packs-games.js?v=2.1.0', './packs-nature.js?v=2.1.0', './packs-extra-culture.js?v=2.1.0', './packs-life.js?v=2.1.0', './manifest.webmanifest', './assets/icon.svg', './assets/icon-192.png', './assets/icon-512.png', './assets/secret-image.png'];
self.addEventListener('install', event => event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(FILES))));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('imposter-') && k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  // Keep a coherent cached release until every tab using it has closed.
  event.respondWith(caches.open(VERSION).then(async cache => {
    const cached = await cache.match(event.request, { ignoreSearch: event.request.mode === 'navigate' });
    if (cached) return cached;
    try { return await fetch(event.request); }
    catch (error) { if (event.request.mode === 'navigate') return cache.match('./index.html'); throw error; }
  }));
});
