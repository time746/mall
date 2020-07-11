<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="titles" v-show="isTabFixed" :class="{'tab-fix': isTabFixed}" @tabClick="tabClick" ref="tabFix"></tab-control>
    <scroll class="home-scroll" 
    ref="scroll" 
    :probeType="2"
    :pullUpLoad="true"
    @contentScroll="contentScroll"
    @contentPull="contentPull">
      <home-swiper :bannerImg="banners.list" class="home-swiper" @tabImgLoad.once="tabImgLoad"></home-swiper>
      <home-recommend :recommendImg="recommend.list"></home-recommend>
      <home-popular></home-popular>
      <tab-control :titles="titles" @tabClick="tabClick" ref="tabScroll"></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isBackShow"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goodsList/GoodsList";
import BackTop from "components/content/backTop/BackTop";


import HomeSwiper from "views/home/childComps/HomeSwiper";
import HomeRecommend from "views/home/childComps/HomeRecommend";
import HomePopular from "views/home/childComps/HomePopular";

import { getHomeMultidata, getHomeGoods } from "@/network/home.js";
import { debounce } from "@/common/utils.js";

export default {
  name: "Home",
  data() {
    return {
      banners: {},
      recommend: {},
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] }
      },
      currentType: "pop",
      isBackShow: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    };
  },
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,

    HomeSwiper,
    HomeRecommend,
    HomePopular
  },

  created() {
    this.getHomeMultidata()
    this.getHomeGoods("pop")
    this.getHomeGoods("new")
    this.getHomeGoods("sell")
  },
  mounted() {
    const deRefresh = debounce(this.$refs.scroll.refresh, 100)
    this.$bus.$on("homeImgLoad", () => {
      deRefresh()
    })
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY, 20)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y
  },
  methods: {
    // 事件
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop"
          break
        case 1:
          this.currentType = "new"
          break
        case 2:
          this.currentType = "sell"
      }
      this.$refs.tabScroll.currentIndex = index
      this.$refs.tabFix.currentIndex = index
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 200)
    },
    contentScroll(pos) {
      this.isBackShow = Math.abs(pos.y) > 1000? true: false
      this.isTabFixed = (Math.abs(pos.y)+44) >= this.tabOffsetTop? true: false
    },
    contentPull() {
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.finishPullUp()
      
    },
    tabImgLoad() {
      setTimeout(() => {
        this.tabOffsetTop = this.$refs.tabScroll.$el.offsetTop
      }, 100)
    },


    // 网络请求相关
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner;
        this.recommend = res.data.recommend;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    }
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: white;
}
.tab-fix {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 9;
}

.home-scroll {
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}
</style>
