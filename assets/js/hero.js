// assets/js/hero.js
import { select } from './utils.js';
let typed = select('.typed');
if (typed) {
  let strings = typed.getAttribute('data-typed-items').split(',');
  new Typed('.typed', {
    strings,
    loop: false,
    typeSpeed: 50,
    backSpeed: 15,
    backDelay: 1000,
    startDelay: 1000,
    showCursor: true,
    cursorChar: '|',
  });
}
