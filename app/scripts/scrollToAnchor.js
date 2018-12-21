($document => {
  addEventListeners();

  function addEventListeners() {
    $document.on('click', 'a[href^="#"]', scrollToAnchor);
  }

  function scrollToAnchor(e) {
    e.preventDefault();
    const $root = $('html, body');
    const $anchor = $($.attr(this, 'href'));
    $root.animate({ scrollTop: $anchor.offset().top }, 500);
  }
})($(document));
