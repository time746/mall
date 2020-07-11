<template>
  <ul class="goods-list">
    <li class="goods-list-item" v-for="(item, index) in goods" :key="index"  @click.prevent="itemClick(item)">
      <a href="javascript:void(0)">
        <img v-lazy="getImg(index)" alt="" @load="homeImgLoad">
      </a>
      <div class="title">{{item.title}}</div>
      <div class="price-cfav">
        <span class="price">￥{{item.price}}</span>
        <span class="cfav">{{item.cfav}}</span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    homeImgLoad() {
      if (this.$route.path.includes("home")) {
        this.$bus.$emit("homeImgLoad")
      }else if (this.$route.path.includes("detail")) {
        this.$bus.$emit("detailImgLoad")
      }
    },
    itemClick(item) {
      this.$router.push("/detail/" + item.iid)
    },
    getImg(index) {
      if (this.goods[index].show) {
        return this.goods[index].show.img
      }
      return this.goods[index].image || this.goods[index].img
    }
  }
}
</script>

<style>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 6px;
  font-size: 12px;
}
.goods-list-item {
  width: 46%;
  padding: 0 0 6px;

}
.goods-list-item .title{
  padding-top: 8px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.goods-list-item .price-cfav {
  text-align: center;
}
.goods-list-item .price {
  padding-right: 6px;
  font-size: 14px;
  color: var(--color-tint);
}

.goods-list-item .cfav::before {
  content: "";
  display: inline-block;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px;

}
.goods-list-item img {
  width: 100%;
  height: 80%;
  border-radius: 6px;
}

</style>