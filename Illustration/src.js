let newSVG = document.querySelectorAll('path');

console.log(newSVG[0])

anime({
    target: newSVG[0],
    translateY: 300
})

