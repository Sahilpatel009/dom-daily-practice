let box = document.querySelector('.box');
let heart = document.querySelector('i');

box.addEventListener('dblclick', function () {
 
    heart.style.opacity = 0.9;
    heart.style.transform = "translate(-50%, -50%) scale(1.2)";


    setTimeout(() => {
        heart.style.opacity = 0;
        
        heart.style.transform = "translate(-50%, -150%) scale(0)";
    }, 800); 
});