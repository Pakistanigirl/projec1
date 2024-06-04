"use strict"
function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

// adding code to prevent copying
//here is an eventlistener of copy with function having e(copy) and 
// by default copying is alloweded so removing this default action
document.addEventListener('copy',function(e){
    alert('Copying Forbidden');
    e.preventDefault();
});
//prventing from slecting the text
document.addEventListener('mousedown',function(e){
    e.preventDefault();
});