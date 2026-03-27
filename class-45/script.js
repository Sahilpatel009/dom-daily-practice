let h1 = document.querySelector('h1')
let btn = document.querySelector('button')
btn.addEventListener('click', function () {
    h1.innerHTML = "Changing User..."
    setTimeout(function () {
        h1.innerHTML = "Hello I am Karan"
    }, 2000)
})

