
autoSlider();
var timer;
var left = 0;

function autoSlider() {
    timer = setTimeout(function(){
        const polosa = document.querySelector(".slider-line");
        left = left - 300;
        if(left < -600){
            left = 0;
        };
        polosa.style.left = left + "px";
        autoSlider();        
    }, 5000)
};

console.log(autoSlider);
