<template>
  <ul class="profile-overage">
    <li>
      <div>
        <span>0.00</span>
        <span>元</span>
        </div>
      <div>我的余额</div>
    </li>
    <li>
      <div>
        <span>0</span>
        <span>个</span>
      </div>
      <div>我的优惠</div>
    </li>
    <li>
      <div>
        <span>0</span>
        <span>分</span>
      </div>
      <div>我的积分</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ProfileOverage"
}
</script>

<style>
.profile-overage {
  display: flex;
  height: 80px;
  
  justify-content: space-evenly;
  border-bottom: 14px solid #eee;
}
.profile-overage li {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-right: 2px solid rgba(220, 220, 220, .5);
}
.profile-overage li:last-child {
  border: none;
}
.profile-overage li>div span:first-child {
  color: orange;
  font-size: 20px;
}
</style>