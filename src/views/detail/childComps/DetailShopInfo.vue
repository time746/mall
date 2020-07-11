<template>
  <div>
    <div class="logo">
      <img :src="shopInfo.logo" alt />
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="info">
      <div>
        <span class="sells">{{shopInfo.sells | sellsFilter}}</span>
        <span>总销量</span>
      </div>
      <div>
        <span class="goods-count">{{shopInfo.goodsCount}}</span>
        <span>全部宝贝</span>
      </div>

      <ul>
        <li v-for="(item, index) in shopInfo.score" :key="index">
          <span>{{item.name}}</span>
          <span class="score" :class="{active: item.isBetter}">{{item.score}}</span>
          <span class="is-better" :class="{active: item.isBetter}">{{item.isBetter | isBetterFilter}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default: () => ({})
    }
  },
  filters: {
    sellsFilter(data) {
      return (data / 10000).toFixed(1) + "万";
    },
    isBetterFilter(isBetter) {
      return !!isBetter == true? "高": "低"
    }
  }
};
</script>

<style scoped>
.logo {
  padding: 20px 0 0 20px;
}
.logo img {
  width: 70px;
  vertical-align: middle;
  padding-right: 10px;
}
.info {
  display: flex;
  text-align: center;
  height: 120px;
  font-size: 14px;
}
.info div {
  flex: 2.5;
  margin: auto;
}
.info div :nth-child(n) {
  padding: 2px 0;
}
.info .sells,
.info .goods-count {
  font-size: 16px;
}
.info ul {
  flex: 5;
  margin: auto;
  border-left: 1px solid #eee;
}
.info ul li {
  padding: 3px 0;
  display: flex;
  justify-content: space-evenly;
  text-align: left;
}
.info ul li .score {
  min-width: 30px;
  color: green;
}
.info ul li .is-better {
  background-color: green;
  color: white;
}
.info .score.active {
  color: var(--color-high-text);
}
.info .is-better.active {
  background-color: var(--color-high-text);
}

.info div span {
  display: block;
}

</style>