<template>
  <div>
    <ul>
      <li v-for="(item, index) in cartList" :key="index" class="cart-list-item">
        <div class="check" @click="checkedClick(item.iid)">
          <div class="check-button">
            <check-button v-show="item.checked"></check-button>
          </div>
        </div>
        <div class="img">
          <img :src="item.img" alt="">
        </div>
        <div class="info">
          <div class="title">{{item.title}}</div>
          <div class="desc">{{item.desc}}</div>
          <div>
            <span>{{item.price}}</span>
            <span class="count">x{{item.count}}</span>
          </div>
        </div>
      </li>
    </ul>
  
  </div>
</template>

<script>
import CheckButton from "components/common/checkButton/CheckButton"

import {mapGetters} from "vuex"

export default {
  name: "CartItem",
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["cartList"])
  },
  methods: {
    checkedClick(iid) {
      this.$store.commit('checkedClick', iid)
    }
  }
}
</script>

<style scoped>
.cart-list-item {
  display: flex;
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
}
.cart-list-item .check {
  flex: 1;
}
.cart-list-item .img {
  flex: 2;
}
.cart-list-item .img img {
  width: 100%;
  border-radius: 4px;
}
.cart-list-item .info {
  flex: 7;
  line-height: 26px;
  overflow: hidden;
  padding: 0  10px;
}
.cart-list-item .info .title,
.cart-list-item .info .desc {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.cart-list-item .info .count {
  float: right;
}
.check {
  margin: auto;
}
.check .check-button {
  width: 20px;
  height: 20px;
  margin: 0 auto;
  border-radius: 50%;
  border: 1px solid #ccc;
}
</style>