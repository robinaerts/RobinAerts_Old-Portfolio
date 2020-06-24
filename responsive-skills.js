var x = window.matchMedia("(max-width: 1409px)")

function Divs() {
    
    var divs= $('.over-container div'),
        now = divs.filter(':visible'),
        next = now.next().length ? now.next() : divs.first(),
        speed = 1000;

    
    now.fadeOut(speed);
    setTimeout(() => {  next.fadeIn(speed); }, 1000);   
}


if(x.matches){
$(function () {
    setInterval(Divs, 5000);
});
}