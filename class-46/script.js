let img = document.querySelector('img')
let love = document.querySelector('i')
img.addEventListener('dblclick', function () {
    love.style.opacity = 0.9
    transform = 'translate(-50%, -50%) scale (1) rotate (0deg)'
})