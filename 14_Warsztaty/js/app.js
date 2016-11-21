document.addEventListener("DOMContentLoaded", function () {
    var dropdown = document.querySelector(".arrowBox");
    var buttons = document.querySelectorAll("nav ul li");
    var bgBox = document.querySelectorAll(".bgBox");
    var div1 = document.querySelector(".box1");
    var div2 = document.querySelector(".box2");
    
    
    dropdown.addEventListener("mouseover", function mouse1(event) {
        dropdown.classList.remove("hide");
    });
    
    dropdown.addEventListener("mouseout", function mouse2(event) {
        dropdown.classList.add("hide");
    });
    
    buttons[0].addEventListener("mouseover", function mouse(event) {
        dropdown.classList.remove("hide");
    });
    
//    buttons[0].addEventListener("mouseout", function block(event) {
//        dropdown.classList.add("hide");
//    });
    
    div1.addEventListener("mouseover", function hide(event) {
        bgBox[0].classList.add("fadeOut");
    });
    
    div1.addEventListener("mouseout", function hidenow(event) {
        bgBox[0].classList.remove("fadeOut");
    });
    
    div2.addEventListener("mouseover", function hide(event) {
        bgBox[1].classList.add("fadeOut");
    });
    
    div2.addEventListener("mouseout", function hidenow(event) {
        bgBox[1].classList.remove("fadeOut");
    });
    
    //SLIDER
    
    var nextBut = document.querySelector(".car_arrow_right");
    
    var prevBut = document.querySelector(".car_arrow_left");
 
    var li = document.querySelectorAll(".car_chair_img li");
 
    var liIndex = 0;
    
    
    
    
    nextBut.addEventListener("click", function(event){
        
        liIndex = liIndex + 1;
        
        
        if(liIndex > li.length-1){
            
            li[liIndex - 1].classList.toggle("visible");
            
            liIndex = 0;
            
            li[liIndex].classList.toggle("visible");
            
        } else {
        
        li[liIndex-1].classList.toggle("visible");
        
        li[liIndex].classList.toggle("visible");
        
        }
             
    });
    
    
    
    
    prevBut.addEventListener("click", function(event){
        
        liIndex = liIndex - 1;
        
        
        if(liIndex < 0){
            
            li[liIndex + 1].classList.toggle("visible");
            
            liIndex = li.length-1;
            
            li[liIndex].classList.toggle("visible"); 
            
        } else {
        
        li[liIndex + 1].classList.toggle("visible");
        
        
        li[liIndex].classList.toggle("visible");
        
        }
    });  
    
    
});

