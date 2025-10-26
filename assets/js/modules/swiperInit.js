export function initSwiper() {
  window.addEventListener('load', () => {
    document.querySelectorAll('.init-swiper').forEach((swiperElement) => {
      const config = JSON.parse(swiperElement.querySelector('.swiper-config').innerHTML.trim());
      new Swiper(swiperElement, config);
    });
  });
}
