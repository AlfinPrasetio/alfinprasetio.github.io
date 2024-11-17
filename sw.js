// sw.js
const cacheName = "cv-alfian";
const assets = [
  "/",
  "/single.html",
  "/css/style.css",
  "/js/main.js",
  "/images/partner-1.png",
  "/images/partner-2.png",
  "/images/partner-3.png",
  "/images/partner-4.png",
  "/images/partner-5.png",
  "/images/icon-pwa-192x192.png",
  "/images/icon-pwa-144x144.png",
  "/images/icon-pwa-512x512.png",
  "/images/maskable.png",
  "/images/profil.jpeg",
  "/images/about.jpg",
  "/images/work-1.jpg",
  "/images/work-2.jpg",
  "/images/work-3.jpg",
  "/images/work-4.jpg",
  "/images/work-5.jpg",
  "/images/work-6.jpg",
  "/images/bg_1.jpg",
  "/images/screenshot.png",
  "/images/ss2.png"
];

// install
self.addEventListener('install', (event)=>{
  event.waitUntil(
    caches.open(cacheName)
    .then((cache)=>cache.addAll(assets))
  );
});

// activate
self.addEventListener('activate', (event) => {
  const cacheAllowlist = [cacheName]; // Only allow current cache

  event.waitUntil(
      caches.keys().then((cacheNames) => {
          return Promise.all(
              cacheNames.map((name) => {
                  if (!cacheAllowlist.includes(name)) {
                      console.log(`Deleting old cache: ${name}`);
                      return caches.delete(name);
                  }
              })
          );
      })
  );
});
  
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

// self.addEventListener('push', function(event) {
  // const options = {
    // body: event.data ? event.data.text() : 'Default push notification',
    // icon: './images/icon-192x192.png',
    // badge: './images/icon-512x512.png'
  // };
  // 
  // event.waitUntil(
    // self.registration.showNotification('New Notification', options)
  // );
// });
