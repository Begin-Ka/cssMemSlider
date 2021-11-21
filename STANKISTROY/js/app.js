// slider 

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

// burger

let burgerbtn = document.querySelector(".burger-btn");
let burgermenu = document.querySelector(".burger-menu");

burgerbtn.addEventListener('click', function(){
    burgerbtn.classList.toggle ('active');
    burgermenu.classList.toggle ('active');
});

// arrowUp прокрутка страницы вверх


window.onload = function(){
    document.getElementById('arrowUp').onclick = function(){
        window.scrollTo(0, 0);
    }    
};


