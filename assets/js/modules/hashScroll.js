export function initHashScroll() {
  window.addEventListener('load', () => {
    if (window.location.hash && document.querySelector(window.location.hash)) {
      setTimeout(() => {
        const section = document.querySelector(window.location.hash);
        const scrollMarginTop = parseInt(getComputedStyle(section).scrollMarginTop);
        window.scrollTo({
          top: section.offsetTop - scrollMarginTop,
          behavior: 'smooth',
        });
      }, 100);
    }
  });
}
