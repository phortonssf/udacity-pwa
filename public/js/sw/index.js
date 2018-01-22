self.addEventListener('fetch', function(event) {
    console.log(event.request, "Hello World");
    event.respondWith(
        new Response('<p class="a-winner-is-me"> Hello World</p>', {
            headers: { 'Content-Type': 'text/html' }
        })
    )
});