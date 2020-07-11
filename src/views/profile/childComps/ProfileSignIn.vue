<template>
  <div class="sigin-in">
    <ul class="sign-in-info">
      <li class="avatar">
        <img src="~assets/img/tabbar/profile.svg" alt="">
      </li>
      <li class="text">
        <div>登入/注册</div>
        <div>
          <i></i>
          <span>暂无绑定手机号</span>
        </div>
      </li>
      <li class="more">
          <img src="~assets/img/common/back.svg" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProfileSignIn"
}
</script>

<style scoped>
.sign-in-info {
  display: flex;
  height: 60px;
  background-color: var(--color-tint);
  align-items: center;
  color: #eee;
  font-size: 14px;
}
.sign-in-info .avatar {
  width: 80px;
}

.sign-in-info .avatar img {
  display: block;
  margin: 0 auto;
  width: 60%;
  
}
.sign-in-info .text {
  line-height: 20px;
}
.sign-in-info .more {
  transform: rotate(180deg);
  flex: 1;
  /* 做了旋转, 所以是左padding */
  padding: 0 0 0 10px; 
}
</style>