<template>
  <img v-for="(item, index) in dataSrc" :key="index" :src="defaultName" :data-src="item">
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
interface Imgs {
  imgs: HTMLImageElement[]
}

export default defineComponent ({
  name: "lazyImage",
  setup (prop, context) {
    let defaultName = require('../../assets/lazy/default.png')
    let dataSrc = [
      require('../../assets/lazy/1.jpg'),
      require('../../assets/lazy/2.jpg'),
      require('../../assets/lazy/3.jpg'),
      require('../../assets/lazy/4.jpg'),
      require('../../assets/lazy/5.jpg'),
      require('../../assets/lazy/6.jpg'),
    ]
    onMounted(() => {
      lazyLoad()
    })
    let lazyLoad = () => {
      let viewHeight = document.body.clientHeight
      let imgs = document.querySelectorAll('img[data-src]')
      observe(imgs)
    }
    let observe = (els: any) => {
      let io = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          const el = (entries[0].target as any)
          const realSrc = el.dataset.src
          if (realSrc) {
            el.src = realSrc
            el.removeAttribute('data-src')
            io.unobserve(el)
          }
        }
      }, {
        threshold: 0.25
      })
      for (let i = 0; i < els.length; i++) {
        io.observe(els[i])
      }
    }
    return {
      defaultName,
      dataSrc
    }
  }
})
</script>

<style scoped>
/* @import url(); 引入公共css类 */

</style>
