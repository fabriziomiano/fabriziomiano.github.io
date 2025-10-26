export function initNavmenuScrollspy() {
  const navmenulinks = document.querySelectorAll('.navmenu a');
  if (!navmenulinks.length) return;

  function navmenuScrollspy() {
    const position = window.scrollY + 200;
    navmenulinks.forEach((link) => {
      if (!link.hash) return;
      const section = document.querySelector(link.hash);
      if (!section) return;

      if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
        document.querySelectorAll('.navmenu a.active').forEach((a) => a.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);
}
