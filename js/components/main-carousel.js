// Click Botão

const buttonRight = document.querySelector('.button-arrow.-right');
const elements = document.querySelector('.elements');
var pixels = 0;

const buttonLeft = document.querySelector('.button-arrow.-left');
    
buttonLeft.addEventListener('click', function() {
    pixels = pixels + 170;
    elements.style = `transform: translateX(${pixels}px)`;
    console.log(pixels)
})


buttonRight.addEventListener('click', function(){
    pixels = pixels - 170;
    elements.style= `transform: translateX(${pixels}px)`
    console.log(pixels)
})

