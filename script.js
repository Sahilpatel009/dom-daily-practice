var inc = document.querySelector("#inc")
var dec = document.querySelector("#dec")
var clr = document.querySelector("#clr")
var h1 = document.querySelector("h1")
var a = 0
inc.addEventListener("click", function () {
    a++
    
    h1.innerHTML = (a)

})
dec.addEventListener("click", function () {
    a--

    h1.innerHTML = (a)

})
clr.addEventListener("click", function () {
    a = 0

    h1.innerHTML = (a)

})
