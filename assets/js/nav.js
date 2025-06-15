// assets/js/nav.js
import { select, on, onscroll } from './utils.js';

// Mobile nav toggle: toggle `mobile-nav-active` on <body>
on(
  'click',
  '.mobile-nav-toggle',
  function () {
    document.body.classList.toggle('mobile-nav-active');
    // Swap this toggle button’s icon
    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
  },
  true
);

// Close on link click
on(
  'click',
  '#navbar .nav-link',
  function () {
    if (document.body.classList.contains('mobile-nav-active')) {
      document.body.classList.remove('mobile-nav-active');
      const toggle = select('.mobile-nav-toggle');
      toggle.classList.add('bi-list');
      toggle.classList.remove('bi-x');
    }
  },
  true
);

// Back-to-top button
let backToTop = select('.back-to-top');
if (backToTop) {
  const toggleVisibility = () => {
    backToTop.classList[window.scrollY > 100 ? 'add' : 'remove']('active');
  };
  window.addEventListener('load', toggleVisibility);
  onscroll(document, toggleVisibility);
}

// Active nav-link switching on scroll
let navLinks = select('#navbar .nav-link', true);
const activateNavOnScroll = () => {
  let position = window.scrollY + 200;
  navLinks.forEach((link) => {
    if (!link.hash) return;
    let section = select(link.hash);
    if (!section) return;
    link.classList.toggle(
      'active',
      position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight
    );
  });
};
window.addEventListener('load', activateNavOnScroll);
onscroll(document, activateNavOnScroll);
