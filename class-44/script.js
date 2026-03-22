let btn = document.querySelector('button')
let main = document.querySelector('main')

btn.addEventListener('click', function () {
    let div = document.createElement('div')

    let x = Math.random() * 100
    let y = Math.random() * 100

    let c1 = Math.floor(Math.random() * 256)
    let c2 = Math.floor(Math.random() * 256)
    let c3 = Math.floor(Math.random() * 256)

    div.style.width = '60px'
    div.style.height = '60px'
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    div.style.position = 'absolute'
    div.style.left = x + '%'
    div.style.top = y + '%'
    div.style.transition = '0.5s ease'

    let baseTransform = ''

    let shape = Math.floor(Math.random() * 8)

    if (shape === 0) div.style.borderRadius = '50%'
    else if (shape === 1) div.style.borderRadius = '0%'
    else if (shape === 2) div.style.borderRadius = '15px'
    else if (shape === 3) div.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)'
    else if (shape === 4) div.style.clipPath = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
    else if (shape === 5) div.style.clipPath = 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
    else if (shape === 6) {
        baseTransform = 'rotate(45deg)'
        div.style.transform = baseTransform
    }
    else if (shape === 7) div.style.clipPath = 'polygon(50% 0%, 60% 35%, 100% 35%, 65% 55%, 80% 100%, 50% 70%, 20% 100%, 35% 55%, 0% 35%, 40% 35%)'

    // 🎬 Initial animation
    div.animate([
        { transform: baseTransform + ' scale(0)' },
        { transform: baseTransform + ' scale(1)' }
    ], { duration: 400, fill: 'forwards' })
