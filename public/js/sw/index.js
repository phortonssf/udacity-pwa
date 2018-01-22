self.addEventListener('fetch', function(event) {
    console.log(event.request, "Hello World");
    event.respondWith(
        fetch('/imgs/dr-evil.gif')
        .catch(
            new Response('<p class="a-winner-is-me"> Hello World</p>', {
                headers: { 'Content-Type': 'text/html' }
            }))
    )
});