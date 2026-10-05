/* Prevent the smooth-scroll engine from moving the page when a modal is being scrolled. */
(function () {
  const modalSelector = '.swp-modal, .iclub-modal';
  const bodySelector = '.swp-modal-body, .iclub-modal-body';

  function isOpen(modal) {
    return modal && !modal.hasAttribute('hidden');
  }

  document.addEventListener('wheel', function (event) {
    const modal = event.target.closest(modalSelector);
    if (!isOpen(modal)) return;

    const body = event.target.closest(bodySelector);
    if (body) {
      /* Keep the wheel gesture inside the modal and stop Lenis/window handlers. */
      event.stopPropagation();
      return;
    }

    /* Do not let wheel events over the backdrop move the page. */
    event.preventDefault();
    event.stopPropagation();
  }, { capture: true, passive: false });

  document.addEventListener('touchmove', function (event) {
    const modal = event.target.closest(modalSelector);
    if (!isOpen(modal)) return;

    const body = event.target.closest(bodySelector);
    if (body) {
      event.stopPropagation();
      return;
    }

    event.preventDefault();
    event.stopPropagation();
  }, { capture: true, passive: false });
})();
