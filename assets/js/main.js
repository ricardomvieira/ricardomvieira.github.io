
(function() {
  const viewerImg = document.getElementById('mainImage');
  const viewerCap = document.getElementById('mainCaption');

  // Start empty
  viewerImg.src = '';
  viewerImg.style.display = 'none';
  viewerCap.textContent = '';

  function showItem(src, caption) {
    if (!src) return;
    viewerImg.src = src;
    viewerImg.style.display = 'block';
    viewerCap.textContent = caption || '';
  }

  document.querySelectorAll('.proj').forEach(el => {
    const img = el.getAttribute('data-image');
    const cap = el.getAttribute('data-caption') || '';

    // Hover/focus shows the item
    el.addEventListener('mouseenter', () => showItem(img, cap));
    el.addEventListener('focus', () => showItem(img, cap));

    // Do NOT clear on mouseleave/blur so the last hovered stays visible
  });
})();
