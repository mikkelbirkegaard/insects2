// The name of the cache
const cacheName = "cache-insects";

// On first load, create the cache - Når websitet indlæses
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      // Fetch data & add fetch result to cache
      return cache.addAll([
        "/insects/",
        "/insects/index.html",
        "/insects/butterflies.jpg",
        "/insects/dragonfly.jpg",
        "/insects/butterfly.jpg",
      ]);
    })
  );
});

// If a file is not available online (if offline)
// open the cache, and look for a match
self.addEventListener("fetch", function (event) {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.open(cacheName).then((cache) => cache.match(event.request))
    )
  );
});
