self.addEventListener('fetch', function(event) {
    console.log(event.request, "Hello World");
});