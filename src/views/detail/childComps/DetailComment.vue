<template>
  <div class="detail-comment">
    <div class="more">
      <span>用户评价</span>
      <span class="find-more">更多</span>
    </div>
    <div v-for="(item, index) in goodsComment" :key="index">
      <div class="user">
        <img :src="item.user.avatar" alt="">
        <span>{{item.user.uname}}</span>
      </div>
      <div class="comment">{{item.content}}</div>
      <div class="detail-info">
        <span>{{item.created | changeDate}}</span>
        <span>{{item.style}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailComment",
  props: {
    goodsComment: Array
  },
  filters: {
    changeDate(timestamp) {
      timestamp = parseInt(timestamp) * 1000
      let date = new Date(timestamp)
      let year = date.getFullYear()
      let month = date.getMonth()
      let day = date.getDate()
      return year + "-" + month + "-" + day
    }
  }
}
</script>

<style scoped>
.detail-comment {
  padding: 20px 10px;
  font-size: 14px;
}
.detail-comment .more {
  height: 50px;
  line-height: 50px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  
}
.detail-comment .find-more {
  float: right;
} 
.detail-comment .user {
  padding: 10px 0;
}

.detail-comment .user img {
  width: 40px;
  padding-right: 10px;
}
.detail-comment .comment {
  padding: 10px 0;
}
.detail-comment .detail-info {
  font-size: 12px;
  color: #999;
}
.detail-comment .detail-info :last-child {
  padding: 0 4px;
}
</style>