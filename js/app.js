document.addEventListener("DOMContentLoaded", function () {
    

    function menuDropdown(){
        
        var dropdown = document.querySelector(".arrowBox");
        var buttons = document.querySelectorAll("nav ul li");
        
        dropdown.addEventListener("mouseover", function mouse1(event) {
            dropdown.classList.remove("hide");
        });

        dropdown.addEventListener("mouseout", function mouse2(event) {
            dropdown.classList.add("hide");
        });

        buttons[0].addEventListener("mouseover", function mouse(event) {
            dropdown.classList.remove("hide");
        });
        
    }    
    
    menuDropdown()
    
    
    function hideBoxBg(){
        
        var bgBox = document.querySelectorAll(".bgBox");
        var div1 = document.querySelector(".box1");
        var div2 = document.querySelector(".box2");
    
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
        
    }   
    
    hideBoxBg()
    
    
    function slider(){
        
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
    
    }
    
    slider()
    
    function FirstBoxSelector(){
        
        var boxFirst = document.querySelector(".boxFirst");
        var boxFirstBigCir = document.querySelector(".boxFirst .bigCir");
        var boxFirstSmallCir = document.querySelector(".boxFirst .smallCir");
        var boxFirstHeadText = document.querySelector(".boxFirst .boxHead");
        var boxFirstBiggestCir = document.querySelector(".boxFirst .biggestCir");
        var boxFirstBut = document.querySelector(".boxFirst .priceButt");
        var boxFirstBuyTab = document.querySelector(".boxFirst .buyTab");
        
        
        boxFirst.addEventListener('mouseover', function(event){
            
            boxFirst.setAttribute('id', 'boxSelected2');
            boxFirstBigCir.setAttribute('id', 'boxSelected2');
            boxFirstSmallCir.setAttribute('id', 'boxSelected1');
            boxFirstHeadText.setAttribute('id', 'boxSelected4');
            boxFirstBiggestCir.setAttribute('id', 'boxSelected1');
            boxFirstBut.setAttribute('id', 'boxSelected5');
            boxFirstBuyTab.setAttribute('id', 'boxSelected3');
        });
        
        boxFirst.addEventListener('mouseout', function(event){
            boxFirst.removeAttribute('id');
            boxFirstBigCir.removeAttribute('id');
            boxFirstSmallCir.removeAttribute('id');
            boxFirstHeadText.removeAttribute('id');
            boxFirstBiggestCir.removeAttribute('id');
            boxFirstBut.removeAttribute('id');
            boxFirstBuyTab.removeAttribute('id');
        });
        
    }
    
    FirstBoxSelector();
    
    function secondBoxSelector(){
        
        var boxMid = document.querySelector(".boxMid");
        var boxMidBigCir = document.querySelector(".boxMid .bigCir");
        var boxMidSmallCir = document.querySelector(".boxMid .smallCir");
        var boxMidHeadText = document.querySelector(".boxMid .boxHead2");
        var boxMidBiggestCir = document.querySelector(".boxMid .biggestCir");
        var boxMidBut = document.querySelector(".boxMid .priceButt");
        var boxMidBuyTab = document.querySelector(".boxMid .buyTab");
        var boxMidWarrTab = document.querySelector(".boxMid .warrTab");
        
        
        boxMid.addEventListener('mouseover', function(event){
            
            boxMid.setAttribute('id', 'boxSelected2');
            boxMidBigCir.setAttribute('id', 'boxSelected2');
            boxMidSmallCir.setAttribute('id', 'boxSelected1');
            boxMidHeadText.setAttribute('id', 'boxSelected4');
            boxMidBiggestCir.setAttribute('id', 'boxSelected1');
            boxMidBut.setAttribute('id', 'boxSelected5');
            boxMidBuyTab.setAttribute('id', 'boxSelected3');
            boxMidWarrTab.setAttribute('id', 'boxSelected3');
        });
        
        boxMid.addEventListener('mouseout', function(event){
            boxMid.removeAttribute('id');
            boxMidBigCir.removeAttribute('id');
            boxMidSmallCir.removeAttribute('id');
            boxMidHeadText.removeAttribute('id');
            boxMidBiggestCir.removeAttribute('id');
            boxMidBut.removeAttribute('id');
            boxMidBuyTab.removeAttribute('id');
            boxMidWarrTab.removeAttribute('id');
        });
        
        
    }
    
    secondBoxSelector();
    
    function thirdBoxSelector(){
        
        var boxLast = document.querySelector(".boxLast");
        var boxLastBigCir = document.querySelector(".boxLast .bigCir");
        var boxLastSmallCir = document.querySelector(".boxLast .smallCir");
        var boxLastHeadText = document.querySelector(".boxLast .boxHead3");
        var boxLastBiggestCir = document.querySelector(".boxLast .biggestCir");
        var boxLastBut = document.querySelector(".boxLast .priceButt");
        var boxLastBuyTab = document.querySelector(".boxLast .buyTab");
        var boxLastWarrTab = document.querySelector(".boxLast .warrTab");
        
        boxLast.addEventListener('mouseover', function(event){
            
            boxLast.setAttribute('id', 'boxSelected2');
            boxLastBigCir.setAttribute('id', 'boxSelected2');
            boxLastSmallCir.setAttribute('id', 'boxSelected1');
            boxLastHeadText.setAttribute('id', 'boxSelected4');
            boxLastBiggestCir.setAttribute('id', 'boxSelected1');
            boxLastBut.setAttribute('id', 'boxSelected5');
            boxLastBuyTab.setAttribute('id', 'boxSelected3');
            boxLastWarrTab.setAttribute('id', 'boxSelected3');
        });
        
        boxLast.addEventListener('mouseout', function(event){
            boxLast.removeAttribute('id');
            boxLastBigCir.removeAttribute('id');
            boxLastSmallCir.removeAttribute('id');
            boxLastHeadText.removeAttribute('id');
            boxLastBiggestCir.removeAttribute('id');
            boxLastBut.removeAttribute('id');
            boxLastBuyTab.removeAttribute('id');
            boxLastWarrTab.removeAttribute('id');
        });
        
        
    }
    
    thirdBoxSelector();
    
});

