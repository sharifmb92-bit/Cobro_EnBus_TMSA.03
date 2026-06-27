const CACHE_NAME = 'bus-pay-v2';
const assets = [
  'index.html',
  'manifest.json',
  'https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
