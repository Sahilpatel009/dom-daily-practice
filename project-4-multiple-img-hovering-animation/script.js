var allElems = document.querySelectorAll(".elem");

allElems.forEach(function (val) {

    val.addEventListener("mouseenter", function () {
        val.querySelector("img").style.opacity = 1;
    });

    
    val.addEventListener("mouseleave", function () {
        val.querySelector("img").style.opacity = 0;
    });


    val.addEventListener("mousemove", function (dets) {
    
        
        let relX = dets.x;
        let relY = dets.y - val.getBoundingClientRect().top;

        val.querySelector("img").style.left = relX + "px";
        val.querySelector("img").style.top = relY + "px";
        
        val.querySelector("img").style.transform = "translate(-50%, -50%)";
    });
});