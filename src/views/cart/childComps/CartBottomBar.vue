<template>
  <div class="bottom-bar">
    <div class="icon">
      <i @click="checkAllClick">
        <check-button v-show="isCheckShow"></check-button>
      </i>
      <span>全选</span>
    </div>
    <div class="total">合计: ¥{{totalPrice}}</div>
    <div class="calculate">去计算: ({{checkedCount}})</div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"

import CheckButton from "components/common/checkButton/CheckButton"


export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (this.cartList.filter(item => {
        return item.checked == true
      }).reduce((total, item) => {
        return total + parseFloat(item.price)
      }, 0)).toFixed(2)
    },
    checkedCount() {
      return (this.cartList.filter(item => {
        return item.checked == true
      })).length
    },
    isCheckShow() {
      // 如果为空直接返回false every遍历时为空时返回true
      if (this.cartList.length == 0) {
        return false
      }
      //
      return this.cartList.every(item => {
        return item.checked == true
      })
    }
  },
  methods: {
    checkAllClick() {
      this.$store.commit("checkAllClick", this.isCheckShow)
    }
  }
  
}
</script>

<style scoped>
.bottom-bar {
  display: flex;
  align-items: center;
  height: 40px;
  line-height: 40px;
  background-color: #ddd;
}
.bottom-bar .icon {
  width: 100px;
  display: flex;
  align-items: center;

}
.bottom-bar .icon i {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #ccc;
  margin: 0 4px 0 10px;
  background-color: #fff;
}
.bottom-bar .total {
  flex: 1;
}
.bottom-bar .calculate {
  width: 100px;
  background: #f00;
  color: #eee;
  text-align: center;
}
</style>