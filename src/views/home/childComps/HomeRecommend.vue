<template>
  <div class="home-recommend">
    <div v-for="(item, index) in recommendImg" :key="index" class="home-recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommendImg: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.home-recommend {
  display: flex;
  padding: 10px 0 10px;
  border-bottom: 10px solid  #eee;
  font-size: 12px;
  text-align: center;
}

.home-recommend-item {
  flex: 1;
}
.home-recommend-item img{
  width: 90%;
}
</style>