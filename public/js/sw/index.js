//Servicre worker Install event
self.addEventListener('install', event => {
    let urlsToCache = [
        '/',
        'js/main.js',
        'css/main.css',
        'imgs/icon.png',
        'https://fonts.gstatic.com/s/roboto/v15/2UX7WLTfW3W8TclTUvlFyQ.woff',
        'https://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOD8E0i7KZn-EPnyo3HZu7kw.woff'
    ];
    //Wait for successful cache 
    event.waitUntil(
        // TODO: open a cache named 'wittr-static-v1'
        caches.open('wittr-static-v1')
        // Add cache the urls from urlsToCache
        .then(cache => cache.addAll(urlsToCache))

    );
});

self.addEventListener('fetch', event => {
    //Respond to event
    event.respondWith(
        caches.match(event.request)
        .then(res => {
            if (res) return res
            return event.request
        })
        .catch(err => new Response('Uh oh, that totally failed.'))
    )
});