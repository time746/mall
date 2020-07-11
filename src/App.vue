<template>
  <div id="app">
    <main-tab-bar v-show="!($route.path.includes('detail'))"></main-tab-bar>
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
import MainTabBar from 'views/MainTabBar'


export default {
  name: 'App',
  components: {
    MainTabBar,
    
  }
}
</script>

<style scoped>
@import url("./assets/css/base.css");



</style>
