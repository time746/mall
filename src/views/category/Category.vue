<template>
  <div class="category">
    <!-- 顶部navbar -->
    <nav-bar class="nav">
      <div slot="center">商品分类</div>
    </nav-bar>
    <!-- 内容 -->
    <div class="content">
      <!-- 左侧标题 -->
      <scroll class="title">
        <category-slide :category="category" @categoryTitleClick="categoryTitleClick"></category-slide>
      </scroll>
      <!-- 右侧图片 -->
      <scroll class="goods" ref="imgScroll">
        <category-sub-slide :subCategory="subCategory" @subImgLoad="subImgLoad"></category-sub-slide>
        <tab-control :titles="titles" @tabClick="tabClick"></tab-control>
        <goods-list :goods="goods[currentType]"></goods-list>
      </scroll>
    </div>
  </div>
</template>

<script defer>
import NavBar from "components/common/navbar/NavBar"
import Scroll from "components/common/scroll/Scroll"
import GoodsList from "components/content/goodsList/GoodsList"
import TabControl from "components/content/tabControl/TabControl"

import CategorySlide from "./childComps/CategorySlide";
import CategorySubSlide from "./childComps/CategorySubSlide";

import { getCategory, getSubcategory, getCategoryDetail } from "@/network/category.js";
import {debounce} from "@/common/utils.js"

export default {
  name: "Category",
  data() {
    return {
      category: [],
      subCategory: [],
      goods: {
        pop: [],
        new: [],
        sell: []
      },
      deRefresh: null,
      titles: ["流行", "新品", "销量"],
      currentType: "pop"
    };
  },
  components: {
    NavBar,
    Scroll,
    GoodsList,
    TabControl,

    CategorySlide,
    CategorySubSlide,
    
  },
  created() {
    //先获取分类
    getCategory().then(res => {
      this.category = res.data.category.list;
      return res.data.category.list
    }).then(res => {
      // 然后获取子分类和流行新品销量的数据
      this.getSubcategory(res[0].maitKey)

      this.getCategoryDetail(res[0].miniWallkey, "pop")
      this.getCategoryDetail(res[0].miniWallkey, "new")
      this.getCategoryDetail(res[0].miniWallkey, "sell")
    })
    
  },
  mounted() {
    //refresh的防抖
    this.deRefresh = debounce(this.$refs.imgScroll.refresh, 200)
  },
  methods: {
    //监听
    subImgLoad() {
      this.deRefresh()
    },
    categoryTitleClick(index) {
      console.log(index);
      this.getSubcategory(this.category[index].maitKey)

      this.getCategoryDetail(this.category[index].miniWallkey, "pop")
      this.getCategoryDetail(this.category[index].miniWallkey, "new")
      this.getCategoryDetail(this.category[index].miniWallkey, "sell")
    },
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
          break
      }
    },

    //网络相关
    getSubcategory(maitKey, index) {
      getSubcategory(maitKey).then(res => {
        this.subCategory = [...res.data.list]
      })
    },
    getCategoryDetail(miniWallkey, type) {
      getCategoryDetail(miniWallkey, type).then(res => {
        this.goods[type] = [...res]
      })
    }
  }
};
</script>

<style scoped>
.category .nav {
  background-color: var(--color-tint);
  color: #eee;
}
.category .content {
  display: flex;
}
.category .title {
  width: 100px;
  background-color: #eee;
  height: calc(100vh - 49px - 44px);
  overflow: hidden;
}
.category .goods {
  flex: 1;
  height: calc(100vh - 49px - 44px);
  overflow: hidden;
}
</style>
