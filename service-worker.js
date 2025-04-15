
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('between-us').then(cache =>
      cache.addAll([
        './',
        './index.html',
        './cards_multilang.json',
        './icon-192.png',
        './icon-512.png',
        './manifest.json'
      ])
    )
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
