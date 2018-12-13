(() => {
  const $numbers = $('.js-animate-number');
  $numbers.each(applyCounterAnimation);

  // taken from https://codepen.io/shivasurya/pen/FatiB
  function applyCounterAnimation() {
    const $number = $(this);
    const propertiesToAnimate = { Counter: $number.text() };
    const animationOptions = {
      duration: 2000,
      easing: 'swing',
      step: now => $number.text(Math.ceil(now))
    };

    $number.prop('Counter', 0).animate(propertiesToAnimate, animationOptions);
  }
})();
