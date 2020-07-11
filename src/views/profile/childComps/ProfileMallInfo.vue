<template>
  <ul class="profile-mall-info"> 
    <li>
      <i></i>
      <span>我的消息</span>
    </li>
    <li>
      <i></i>
      <span>积分商城</span>
    </li>
    <li>
      <i></i>
      <span>会员卡</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ProfileMallInfo",
}
</script>

<style scoped>
.profile-mall-info {
  border-bottom: 14px solid #eee;
}
.profile-mall-info li {
  height: 36px;
  line-height: 36px;
  border-bottom: 2px solid rgba(220, 220, 220, .5);
  padding: 0 0 0 10px;
}
.profile-mall-info li:last-child {
  border: none;
}
</style>