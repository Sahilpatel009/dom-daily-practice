let h2 = document.querySelector('h2')
let btn = document.querySelector('#add')
let igr = document.querySelector('#igr')
let check = 0

igr.addEventListener('click', function () {
    if (check === 0) {
        h2.innerHTML = 'You ignore'
        h2.style.color = 'black'
        igr.style.display = "none"
        check = 1
    }
    else {
        igr.style.display = "block"
        check = 0
    }
})

btn.addEventListener('click', function () {

    if (check === 0) {
        h2.innerHTML = 'Friend'
        h2.style.color = 'green'
        btn.innerHTML = 'Remove'
        check = 1
    }
    else {
        h2.innerHTML = 'Stranger'
        h2.style.color = 'red'
        btn.innerHTML = 'Add Friend'
        check = 0
    }

})
