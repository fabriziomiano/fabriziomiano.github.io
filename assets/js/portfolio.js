// assets/js/portfolio.js
import { select, on } from './utils.js';
window.addEventListener('load', () => {
  // Isotope
  let grid = select('.portfolio-container');
  if (grid) {
    let iso = new Isotope(grid, { itemSelector: '.portfolio-item' });
    select('#portfolio-flters li', true).forEach(el => {
      on('click', el, function(e) {
        e.preventDefault();
        select('#portfolio-flters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        iso.arrange({ filter: this.getAttribute('data-filter') });
      });
    });
  }
  // GLightbox
  GLightbox({ selector: '.portfolio-lightbox' });
  // Swiper
  new Swiper('.portfolio-details-slider', { speed: 400, autoplay: { delay: 5000 } });
});
