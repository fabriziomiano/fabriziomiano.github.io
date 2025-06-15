// assets/js/utils.js
export function select(el, all = false) {
  el = el.trim()
  if (all) return [...document.querySelectorAll(el)]
  return document.querySelector(el)
}
export function on(type, el, listener, all = false) {
  (all ? select(el, true) : [select(el)]).forEach(e => e && e.addEventListener(type, listener))
}
export function onscroll(el, listener) {
  el.addEventListener('scroll', listener)
}
