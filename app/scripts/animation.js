($window => {
  const DURATION = 1;
  const WINDOW_SCROLL_EVENT = 'scroll';
  const WINDOW_RESIZE_EVENT = 'resize';

  init();

  function init() {
    removeEventHandlers();
    addEventHandlers();
    runAnimation();
  }

  function addEventHandlers() {
    $window.on(WINDOW_SCROLL_EVENT, runAnimation);
    $window.on(WINDOW_RESIZE_EVENT, init);
  }

  function removeEventHandlers() {
    $window.off(WINDOW_SCROLL_EVENT, runAnimation);
    $window.off(WINDOW_RESIZE_EVENT, init);
  }

  function runAnimation() {
    animateHeadline();
    const $services = $('.js-animate-service-box');
    const $agencyImage = $('.js-animate-agency-image');
    const $numbers = $('.js-animate-number');
    const $yearNumber = $numbers.first();
    if ($services.isFullyInViewport()) animateServices($services);
    if ($agencyImage.isFullyInViewport()) animateAbout($agencyImage);
    // if ($yearNumber.isFullyInViewport()) $numbers.each(animateNumbers);
  }

  function animateHeadline() {
    const $image = $('.js-animate-headline-image');
    const $title = $('.js-animate-headline-title');
    const $subtitle = $('.js-animate-headline-subtitle');

    const tl = new TimelineLite({ delay: DURATION });

    TweenMax.to($image, DURATION, { opacity: 1, x: 0, y: 0 });
    tl.to($title, DURATION, { opacity: 1, x: 0, y: 0 });
    tl.to($subtitle, DURATION, { opacity: 1, y: 0 }, `-=${DURATION}`);
  }

  function animateServices($elements) {
    // const DURATION = 0.7;
    const DELAY = 0.2;

    $elements.each(function(index) {
      TweenMax.to($(this), DURATION, {
        delay: DELAY * (index + 1),
        scale: 1,
        opacity: 1
      });
    });
  }

  function animateAbout($element) {
    // const DURATION = 0.8;
    TweenMax.to($element, DURATION, { opacity: 1, x: 0, y: 0 });
  }

  // taken from https://codepen.io/shivasurya/pen/FatiB
  function animateNumbers() {
    const $number = $(this);
    const propertiesToAnimate = { Counter: $number.text() };
    const animationOptions = {
      duration: 2000,
      easing: 'swing',
      step: now => $number.text(Math.ceil(now))
    };

    $number.prop('Counter', 0).animate(propertiesToAnimate, animationOptions);
  }
})($(window));
