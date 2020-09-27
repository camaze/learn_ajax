const {
    request
} = require("http")

myButton.addEventListener('click', (e) => {
    request = new XMLHttpRequest()
    request.open('GET')
})