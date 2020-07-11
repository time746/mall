<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center" >购物车({{cartLength}})</div>
    </nav-bar>
    <scroll class="scroll">
      <cart-item></cart-item>
    </scroll>
      <cart-bottom-bar></cart-bottom-bar>
      
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import Scroll from "components/common/scroll/Scroll"


import CartItem from "./childComps/CartItem"
import CartBottomBar from "./childComps/CartBottomBar"

import {mapGetters} from "vuex"

export default {
  name: "Cart",
  data() {
    return {
      
    }
  },
  components: {
    Scroll,
    NavBar,
    

    CartItem,
    CartBottomBar,

  },
  computed: {
    ...mapGetters(["cartLength"])
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  position: relative;
  z-index: 9;
}

.scroll {
  height: calc(100vh - 44px - 49px - 40px);
}
</style>
