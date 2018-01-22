self.addEventListener('fetch', function(event) {
    console.log(event.request, "Hello World");
    if (event.request.url.endsWith('.gif')) {
        event.respondWith(
            fetch('/imgs/dr-evil.gif')
        )
    }
});