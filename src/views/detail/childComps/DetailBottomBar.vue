<template>
    <ul  class="bottom-bar">
      <li>
        <div class="customer-service"></div>
        <div>客服</div>
      </li>
      <li>
        <div class="shop"></div>
        <div>店铺</div>
      </li>
      <li>
        <div class="collect"></div>
        <div>收藏</div>
      </li>
      <li class="add-cart" @click="addCart">
        加入购物车
      </li>
      <li class="buy">
        购买
      </li>
    </ul>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addCart() {
      this.$emit("addCart")
      
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  height: 49px;
  display: flex;
  position: relative;
  z-index: 9;
  text-align: center;
  font-size: 14px;
  background: white;
}
.bottom-bar li {
  flex: 1;
}
.add-cart, .buy {
  min-width: 25%;
  font-size: 16px;
  line-height: 49px;
}
.add-cart {
  
  background-color: rgb(255, 222, 15);
}
.buy {
  background-color: rgb(255, 120, 154);
}
.customer-service,
.shop,
.collect {
  width: 20px;
  height: 20px;
  margin: 4px auto;
  background: url("~assets/img/detail/detail_bottom.png") 0 88px/100%;
  margin-bottom: 4px;
}
.shop {
  background: url("~assets/img/detail/detail_bottom.png") 0 184px/100%;
}
.collect {
  background: url("~assets/img/detail/detail_bottom.png") 0 137px/100%;
}
</style>