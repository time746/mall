<template>
  <swiper>
    <swiper-item v-for="(item, index) in bannerImg" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt @load="imgLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  props: {
    bannerImg: {
      type: Array,
      default: () => []
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imgLoad() {
      this.$emit("tabImgLoad")
    }
  }
};
</script>

<style>
</style>