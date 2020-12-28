import type { App, Directive } from 'vue'

function showImage (el: HTMLImageElement, imgSrc: string) {
  const img = new Image()
  img.src = imgSrc
  img.onload = () => {
    el.src = imgSrc
    // el.isLo
  }
}

const Lazy: Directive = {
  beforeMount (el) {
    console.log(el)
    let io = new IntersectionObserver(entries => {
      console.log(entries)
    })
    io.observe(el)
  },
  mounted (el) {
  }
}
export function setupLazyDirective (app: App) {
  app.directive('lazy', Lazy)
}
export default Lazy