// The name of the cache
const cacheName = "cache-insects";

// On first load, create the cache - Når websitet indlæses
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      // Fetch data & add fetch result to cache
      return cache.addAll([
        "/insects2/",
        "/insects2/index.html",
        "/insects2/butterflies.jpg",
        "/insects2/dragonfly.jpg",
        "/insects2/butterfly.jpg",
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
