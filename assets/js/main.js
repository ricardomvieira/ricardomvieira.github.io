(function() {
  const viewerImg = document.getElementById('mainImage');
  const viewerCap = document.getElementById('mainCaption');
  const defaultSrc = viewerImg.getAttribute('src');

  function showDefault() {
    viewerImg.src = defaultSrc;
    viewerCap.textContent = '';
  }

  document.querySelectorAll('.proj').forEach(el => {
    el.addEventListener('mouseenter', () => {
      const img = el.getAttribute('data-image');
      const cap = el.getAttribute('data-caption') || '';
      if (img) viewerImg.src = img;
      viewerCap.textContent = cap;
    });
    el.addEventListener('mouseleave', showDefault);
    // Accessibility
    el.setAttribute('tabindex', '0');
    el.addEventListener('focus', () => {
      const img = el.getAttribute('data-image');
      const cap = el.getAttribute('data-caption') || '';
      if (img) viewerImg.src = img;
      viewerCap.textContent = cap;
    });
    el.addEventListener('blur', showDefault);
  });
})();