$.fn.isFullyInViewport = function() {
  const $this = $(this);
  const $window = $(window);

  const elementTop = $this.offset().top;
  const elementBottom = elementTop + $this.outerHeight();

  const viewportTop = $window.scrollTop();
  const viewportBottom = viewportTop + $window.height();

  return elementTop >= viewportTop && elementBottom <= viewportBottom;
};
