document.addEventListener('DOMContentLoaded', async () => {
  Theme.init();
  await I18n.init();
  Animations.init();

  document.querySelectorAll('.theme-toggle').forEach(el => {
    el.addEventListener('click', () => Theme.toggle());
  });

  document.querySelectorAll('.lang-toggle').forEach(el => {
    el.addEventListener('click', () => I18n.toggle());
  });

  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    }, { passive: true });
  }
});
