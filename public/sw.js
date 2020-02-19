self.addEventListener('install', function(event) {
  console.log('SW installed.');
  event.waitUntil(
    caches.open('static-cache').then(function(cache) {
      cache.addAll([
        './',
        './index.html',
        './src/js/app.js',
        './src/css/app.css',
        './src/images/pwa.jpg',
        'https://fonts.googleapis.com/css?family=Raleway:400,700'
      ]);
    })
  );
});

self.addEventListener('activate', () => {
  console.log('SW activated.');
});
