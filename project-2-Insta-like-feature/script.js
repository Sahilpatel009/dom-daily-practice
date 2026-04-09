let box = document.querySelector('.box');
let heart = document.querySelector('i');

box.addEventListener('dblclick', function () {

    heart.style.opacity = 0.9;
    heart.style.transform = "translate(-50%, -50%) scale(1.2)";
    heart.style.transition= "all 0.5s cubic - bezier(0.075, 0.82, 0.165, 1)"

    setTimeout(() => {
        heart.style.opacity = 0;

        heart.style.transform = "translate(-50%, -150%) scale(0)";
    }, 800);
});