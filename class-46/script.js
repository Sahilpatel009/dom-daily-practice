let img = document.querySelector('img')
let love = document.querySelector('i')

img.addEventListener('click', function () {
    love.style.opacity = 1
    love.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)'

    setTimeout(() => {
        love.style.opacity = 0
        love.style.transform = 'translate(-50%, -50%) scale(0) rotate(-60deg)'
    }, 800)
})