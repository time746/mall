<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"

export default {
  name: "BScroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null,
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true

    })
    
    this.$nextTick(() => {
      if (this.probeType !== 0) {
        this.scroll.on("scroll", pos => {
        this.$emit("contentScroll", pos)
      })
      }

      if (this.pullUpLoad) {
        this.scroll.on("pullingUp", () => {
        this.$emit("contentPull")
      })
      }
        
    })
  },
  methods: {
    scrollTo(x, y, ms=20) {
      this.scroll.scrollTo(x, y, ms)
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    },
    refresh() {
      this.scroll.refresh()
    }
  }
}
</script>

<style scoped>

</style>