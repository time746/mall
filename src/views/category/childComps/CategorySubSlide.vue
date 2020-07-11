<template>
  <ul class="category-sub-slide">
    <li v-for="(item, index) of subCategory" :key="index">
      <div>
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgLoad">
        </a>
      </div>
      <div>{{item.title}}</div>
    </li>
    <li v-show="isShowOne"></li>
    <li v-show="isShowTwo"></li>
  </ul>
</template>

<script>
export default {
  name: "CategorySubSlide",
  props: {
    subCategory: Array
  },
  methods: {
    imgLoad() {
      this.$emit("subImgLoad")
    }
  },
  computed: {
    //余数为1，需要两个盒子，余数为2，只需要1个盒子占位
    isShowOne() {
      if (this.subCategory.length%3 == 0) {
        return false
      } else {
        return true
      }
    },
    isShowTwo() {
      if (this.subCategory.length%3 == 0) {
        return false
      } else if (this.subCategory.length%3 == 1) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style>
.category-sub-slide {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
  font-size: 12px;

  
}
.category-sub-slide li {
  padding: 10px 0;
  flex: 1;
  text-align: center;

}
.category-sub-slide li img {
  width: 60px;
}
</style>