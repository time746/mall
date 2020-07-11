<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <ul slot="center" class="center">
        <li v-for="(item, index) in titles" :key="index" :class="{active: currentIndex === index}" @click="itemClick(index)">{{item}}</li>
      </ul>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit("navClick", index)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped> 
.center {
  display: flex;


}
.center li {
  flex: 1;
}
.active {
  color: var(--color-tint);
}


</style>