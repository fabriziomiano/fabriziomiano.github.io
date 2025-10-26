import { initHeaderToggle } from './modules/headerToggle.js';
import { initPreloader } from './modules/preloader.js';
import { initScrollTop } from './modules/scrollTop.js';
import { initAOS } from './modules/aosInit.js';
import { initTyped } from './modules/typedInit.js';
import { initPureCounter } from './modules/pureCounterInit.js';
import { initSkillsAnimation } from './modules/skillsAnimation.js';
import { initGlightbox } from './modules/glightboxInit.js';
import { initIsotope } from './modules/isotopeInit.js';
import { initSwiper } from './modules/swiperInit.js';
import { initHashScroll } from './modules/hashScroll.js';
import { initNavmenuScrollspy } from './modules/navmenuScrollspy.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeaderToggle();
  initPreloader();
  initScrollTop();
  initAOS();
  initTyped();
  initPureCounter();
  initSkillsAnimation();
  initGlightbox();
  initIsotope();
  initSwiper();
  initHashScroll();
  initNavmenuScrollspy();
});
