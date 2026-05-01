self.addEventListener('install', (e) => {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', (e) => {
  // Tento kód umožňuje aplikaci běžet i offline
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});