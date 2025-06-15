// assets/js/hero.js
import { select } from './utils.js';
let typed = select('.typed');
if (typed) {
  let strings = typed.getAttribute('data-typed-items').split(',');
  new Typed('.typed', {
    strings,
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1000,
    startDelay: 1000,
    showCursor: true,
    cursorChar: '|',
  });
}
