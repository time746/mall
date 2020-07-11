<template>
  <div class="goods-info">
    <div class="desc">{{goodsInfo.desc}}</div>
    <div class="key">{{goodsInfo.key}}:</div>
    <ul>
      <li v-for="(item, index) of goodsInfo.images" :key="index">
        <img :src="item" alt="" @load="imgLoad">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    goodsInfo: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      count: 0,
      imageCount: 0
    }
  },
  watch: {

  },
  methods: {
    imgLoad() {
      this.count++
      if(this.count == this.goodsInfo.images.length) {
        this.$emit("detailImageLoad")
      }
    }
  }
}
</script>

<style scoped>
.goods-info img {
  width: 100%;
}
.goods-info .key {
  height: 30px;
  line-height: 30px;
  padding: 0 0 0 10px;
  color: #000;
}
</style>