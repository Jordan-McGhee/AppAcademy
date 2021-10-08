console.log("Hello from the JavaScript console!");

// Your AJAX request here
$.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q=atlanta,US&appid=bcb83c4b54aee8418983c2aff3073b3b",
    type: "GET",
    success(data) {
        console.log("We got your data!")
        console.log(data)
    },
    error() {
        console.log("An error occurred")
    }
})


// Add another console log here, outside your AJAX request
console.log("This is after the AJAX request")