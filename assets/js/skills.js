// assets/js/skills.js
import { select } from './utils.js';
let skillsContent = select('.skills-content');
if (skillsContent) {
  new Waypoint({
    element: skillsContent,
    offset: '80%',
    handler() {
      select('.progress .progress-bar', true).forEach(el => el.style.width = el.getAttribute('aria-valuenow') + '%');
    }
  });
}
