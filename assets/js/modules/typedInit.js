export function initTyped() {
  const selectTyped = document.querySelector('.typed');
  if (!selectTyped) return;

  let typedStrings = selectTyped.getAttribute('data-typed-items');
  if (!typedStrings) return;

  new Typed('.typed', {
    strings: typedStrings.split(','),
    loop: false,
    typeSpeed: 50,
    backSpeed: 15,
    backDelay: 1000,
    startDelay: 1000,
    showCursor: true,
    cursorChar: '|',
  });
}
