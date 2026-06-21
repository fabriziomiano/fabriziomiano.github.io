const body = document.body;
const toggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-site-nav]');
const links = [...document.querySelectorAll('[data-site-nav] a')];
const openLabel = toggle?.dataset.openLabel || 'Open navigation';
const closeLabel = toggle?.dataset.closeLabel || 'Close navigation';

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? closeLabel : openLabel);
    toggle.querySelector('i')?.classList.toggle('bi-x-lg', isOpen);
    toggle.querySelector('i')?.classList.toggle('bi-list', !isOpen);
  });

  links.forEach((link) => {
    link.addEventListener('click', () => {
      body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', openLabel);
      toggle.querySelector('i')?.classList.add('bi-list');
      toggle.querySelector('i')?.classList.remove('bi-x-lg');
    });
  });
}

const sections = links
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: '-42% 0px -52% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}
