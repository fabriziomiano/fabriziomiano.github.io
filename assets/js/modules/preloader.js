export function initPreloader() {
  const preloader = document.querySelector('#preloader');
  if (!preloader) return;
  window.addEventListener('load', () => preloader.remove());
}
