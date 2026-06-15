const Animations = {
  init() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.classList.add('animate-visible');
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-visible');
          }, entry.target.dataset.delay || index * 100);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }
};
