<template>
  <div>
    <div class="title">{{goods.title}}</div>
    <div class="price">
      <span class="now-price">{{"¥"+goods.price}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span class="desc">{{goods.discountDesc}}</span>
    </div>
    <div v-if="goods.columns" class="columns">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length - 1].name}}</span>
    </div>
    <ul v-if="goods.services" class="services">
      <li v-for="index in 3" :key="index">
        <img :src="goods.services[index - 1].icon" alt="">
        <span>{{goods.services[index - 1].name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped>
.title {
  padding: 10px 6px 0;
}
.price {
  height: 40px;
  line-height: 40px;
}
.now-price {
  padding: 0 6px;
  font-size: 20px;
  color: var(--color-tint);
}
.old-price {
  position: relative;
  top: 2px;
  font-size: 14px;
  color: #999;
  text-decoration: line-through;

}
.desc {
  position: relative;
  bottom: 6px;
  display: inline-block;
  background-color: var(--color-tint);
  color: white;
  height: 20px;
  line-height: 20px;
  padding: 2px;
  border-radius: 10px;

}
.columns {
  display: flex;
  padding: 0 6px;
  justify-content: space-between;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #999;
  border-bottom: 2px solid #eee;
}
.services {
  display: flex;
  padding: 0 6px;
  justify-content: space-between;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  border-bottom: 10px solid #eee;
  box-sizing: content-box;
}

.services li img {
  width: 12px;
  height: 12px;
}

</style>