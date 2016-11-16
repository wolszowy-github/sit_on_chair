document.addEventListener("DOMContentLoaded", function () {
    var dropdown = document.querySelector(".arrowBox");
    var buttons = document.querySelectorAll("nav ul li");
    var bgBox = document.querySelectorAll(".bgBox");
    var div1 = document.querySelector(".box1");
    var div2 = document.querySelector(".box2");
    
    console.log(bgBox);
    
    
    
    buttons[0].addEventListener("mouseover", function mouse(event) {
        dropdown.classList.remove("hide");
    });
    
    buttons[0].addEventListener("mouseout", function block(event) {
        dropdown.classList.add("hide");
    });
    
    div1.addEventListener("mouseover", function hide(event) {
        bgBox[0].classList.add("hide");
    });
    
    div1.addEventListener("mouseout", function hidenow(event) {
        bgBox[0].classList.remove("hide");
    });
    
    div2.addEventListener("mouseover", function hide(event) {
        bgBox[1].classList.add("hide");
    });
    
    div2.addEventListener("mouseout", function hidenow(event) {
        bgBox[1].classList.remove("hide");
    });
    
});

