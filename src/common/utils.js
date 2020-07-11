export function debounce(fn, delay) {
  let timer = null
  return function (...args) {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
      console.log(2);
    }, delay)
  }
}