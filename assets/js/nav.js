// assets/js/nav.js
import { select, on, onscroll } from './utils.js';

// Mobile nav toggle
on('click', '.mobile-nav-toggle', () => {
  select('#navbar').classList.toggle('navbar-mobile');
  // …etc…
});

// Back-to-top visibility
let backToTop = select('.back-to-top');
if (backToTop) {
  const toggle = () => backToTop.classList[window.scrollY > 100 ? 'add' : 'remove']('active');
  window.addEventListener('load', toggle);
  onscroll(document, toggle);
}

// Active nav-link on scroll
// …etc…
