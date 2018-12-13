(() => {
  animateHeadline();

  function animateHeadline() {
    const DURATION = 0.8;
    const $image = $('.js-animate-headline-image');
    const $title = $('.js-animate-headline-title');
    const $subtitle = $('.js-animate-headline-subtitle');

    const tl = new TimelineLite({ delay: DURATION });

    TweenMax.to($image, DURATION, { opacity: 1, y: 0 });
    tl.to($title, DURATION, { opacity: 1, x: 0, y: 0 });
    tl.to($subtitle, DURATION, { opacity: 1, y: 0 }, `-=${DURATION}`);
  }
})();

($window => {
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
    const $services = $('.js-animate-service-box');
    if ($services.isFullyInViewport()) animateServices($services);
  }

  function animateServices($elements) {
    const DURATION = 0.6;
    const DELAY = 0.2;

    $elements.each(function(index) {
      TweenMax.to($(this), DURATION, {
        delay: DELAY * index,
        scale: 1,
        rotationY: 0,
        opacity: 1
      });
    });
  }
})($(window));
