anime({
    targets:'.image1',
    translateX: 20,
    translateY: 300,
    easing: 'easeInOutQuad',
    delay: 100,
  direction: 'alternate',
      loop: true
})

anime({
    targets:'.image2',
    translateX: 90,
    translateY: -50,
    easing: 'easeInOutQuad',
    delay: 70,
  direction: 'alternate',
      loop: true
})

anime({
  targets: '.image3',
translateY: -300,
  translateX: [100, 250], // from 100 to 250
  delay: 500,
  direction: 'alternate',
  loop: true
});

anime({
  targets: '.image4',
    translateX: -70,
translateY: 400,
  translateX: [100, 250], // from 100 to 250
  delay: 300,
  direction: 'alternate',
  loop: true
});