// slider 

autoSlider();
var timer;
var left = 0;

function autoSlider(){
    timer = setTimeout(function(){
        const polosa = document.querySelector(".slider-line");
        left = left - 400;
        if(left < -1200){
            left = 0;
        };
        polosa.style.left = left + "px";
        autoSlider();
    },5000)
};

// arrowUp прокрутка страницы вверх


window.onload = function(){
    document.getElementById('arrowUp').onclick = function(){
        window.scrollTo(0, 0);
    }    
};

// form to email

document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);
    
    async function formSend(e){
        e.preventDefault();
    }
});