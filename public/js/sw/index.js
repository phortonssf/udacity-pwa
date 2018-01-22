self.addEventListener('fetch', function(event) {
    console.log(event.request, "Hello World");
    event.respondWith(
        new Response('Hello World')
    )
});