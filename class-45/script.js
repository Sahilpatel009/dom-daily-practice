let grow = 0
let btn = document.querySelector('button')
let inner = document.querySelector('.inner')
let h1 = document.querySelector('h1')
btn.addEventListener('click', function () {
    let num = 50 + Math.floor(Math.random() * 50)
    console.log(`Your file will be Downloaded in ${num / 10} seconds`);

    let int = setInterval(() => {
        btn.style.pointerEvents = 'none'
        grow++
        h1.innerHTML = grow + '%'
        inner.style.width = grow + '%'
    }, num);
    setTimeout(function () {
        clearInterval(int)
        btn.innerHTML = 'Downloaded'
        btn.style.opacity = 0.5
    }, num * 100);
})