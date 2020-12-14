<template>
  <div>
    <detail-nav-bar class="detail-nav" @navClick="navClick" ref="detailNav"></detail-nav-bar>
      <scroll class="detail-scroll" ref="scroll" @contentScroll="contentScroll" :probeType="2">
        <detail-swiper :topImages="topImages" v-show="topImages"></detail-swiper>
        <!-- 网络不好会显示undefined 加个判断 -->
        <detail-base-info :goods="goods"  v-show="titleOffsetTop.length"></detail-base-info>
        <detail-shop-info :shopInfo="shopInfo"  v-show="titleOffsetTop.length"></detail-shop-info>
        <!-- 网络不好会显示nan 加个判断 -->
        <detail-goods-info :goodsInfo="goodsInfo" @detailImageLoad="detailImageLoad"></detail-goods-info>
        <detail-params-info :goodsParams="goodsParams" ref="params" ></detail-params-info>
        <detail-comment :goodsComment="goodsComment" ref="comment"></detail-comment>
        <goods-list :goods="goodsRecommend" ref="recommend"></goods-list>
      </scroll>
    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isBackShow"></back-top>
    
  </div>
</template>

<script>
import GoodsList from "components/content/goodsList/GoodsList"

import DetailNavBar from "views/detail/childComps/DetailNavBar"
import DetailSwiper from "views/detail/childComps/DetailSwiper"
import DetailBaseInfo from "views/detail/childComps/DetailBaseInfo"
import DetailShopInfo from "views/detail/childComps/DetailShopInfo"
import DetailGoodsInfo from "views/detail/childComps/DetailGoodsInfo"
import DetailParamsInfo from "views/detail/childComps/DetailParamsInfo"
import DetailComment from "views/detail/childComps/DetailComment"
import DetailBottomBar from "views/detail/childComps/DetailBottomBar"

import Scroll from "components/common/scroll/Scroll"
// 混入仍需要导入
import BackTop from "components/content/backTop/BackTop";
import {backToMixin} from "@/common/mixin.js"

import {debounce} from "@/common/utils.js"
import { getDetail, getRecommend, Goods, Shop, Detail, Params } from "@/network/detail.js"
import {mapActions} from "vuex"

export default {
  name: "Detail",
  components: {
    Scroll,
    GoodsList,
    BackTop,

    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailComment,
    DetailBottomBar,

  },
  data() {
    return {
      iid: null,
      topImages: null,
      goods: {},
      shopInfo: {},
      data: null,
      goodsInfo: {},
      goodsParams: {},
      goodsComment: [],
      goodsRecommend: [],
      titleOffsetTop: [],
      deScroll: null,
      // isBackShow: false 混入
    }
  },
  mixins: [backToMixin],
  created() {
    this.iid = this.$route.params.iid

    // 获取详情数据保存
    getDetail(this.iid).then(res => {
      this.topImages = res.result.itemInfo.topImages
      this.goods = new Goods(res.result)
      this.shopInfo = new Shop(res.result.shopInfo)
      this.goodsInfo = new Detail(res.result)
      this.goodsParams = new Params(res.result)
      this.goodsComment = res.result.rate.list
      
      // 测试
      this.data = res.result
    })
    // 获取推荐数据
    getRecommend().then(res => {
      this.goodsRecommend = res.data.list
    })
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 100)
    this.$bus.$on("detailImgLoad", () => {
      refresh()
    })
    this.deScroll = debounce(() => {
      this.titleOffsetTop = []
      this.titleOffsetTop.push(0)
      this.titleOffsetTop.push(this.$refs.params.$el.offsetTop)
      this.titleOffsetTop.push(this.$refs.comment.$el.offsetTop)
      this.titleOffsetTop.push(this.$refs.recommend.$el.offsetTop)
      this.titleOffsetTop.push(Number.MAX_VALUE)
    }, 100)
  },
  methods: {
    ...mapActions(["addClick"]),
    detailImageLoad() {
      this.$refs.scroll.refresh()
      this.deScroll()
    },
    navClick(index) {
      this.$refs.scroll.scrollTo(0, -this.titleOffsetTop[index]+44, 200)
    },
    contentScroll(pos) {
      let y = Math.abs(pos.y) + 44
      let length = this.titleOffsetTop.length
      // 这里判断, 也可以用多个if
      for (let i = 0; i < length - 1; i++) {
        if (this.$refs.detailNav.currentIndex !== i && (y >= this.titleOffsetTop[i] && y < this.titleOffsetTop[i + 1])) {
          // 如果在i 和 i+1 之间,那么就是滚动到了第i个
          this.$refs.detailNav.currentIndex = i
          console.log(i);
          break
        }
      }
      //控制backtop是否显示
      this.isBackShow = Math.abs(pos.y) > 1000? true: false
    },
    //  混入
    // backClick() {
    //   this.$refs.scroll.scrollTo(0, 0, 200)
    // },
    addCart() {
      const product = {}
      product.img = this.topImages[0]
      product.iid = this.iid
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.price
      //提交并弹出toast  addclick已映射
      this.addClick(product).then(res => {
        this.$toast.showToast(res, 2000)
      })
    }
  
  }
}
</script>

<style scoped>
.detail-nav {
  position: relative;
  z-index: 2;
  background-color: #fff;
}
.detail-scroll {
  height: calc(100vh - 44px - 49px);
}


</style>