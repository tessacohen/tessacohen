anime({
  targets: '.duration-demo .el',
  translateX: 250,
  duration: 3000
});

var pathEls = document.querySelectorAll('path');
let myImageOfMap = document.getElementById('image');    






let props = document.querySelectorAll(".image")
anime({
    translateX: {
        value: 390,
        duration: 800
    },
    rotate: {
        value: 330,
        duration: 1800,
        easing: 'easeInOutSine'
    },
    scale: {
        value: 6,
        duration: 1600,
        delay: 800,
        easing: 'easeInOutQuart'
    },
    loop: true,
    direction: 'alternate',
    delay: 250 // All properties except 'scale' inherit 250ms delay
});


let props = document.querySelectorAll(".image1")
var animation = anime({
  targets: '.tick-demo .el',
  translateX: 270,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutQuad',
  autoplay: false
});

function loop(t) {
  animation.tick(t);
  customRAF = requestAnimationFrame(loop);
}