<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">我的档案</div>
    </nav-bar>
    <profile-sign-in></profile-sign-in>
    <profile-overage></profile-overage>
    <profile-mall-info></profile-mall-info>
    <profile-app-info></profile-app-info>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"

import ProfileSignIn from "./childComps/ProfileSignIn"
import ProfileOverage from "./childComps/ProfileOverage"
import ProfileMallInfo from "./childComps/ProfileMallInfo"
import ProfileAppInfo from "./childComps/ProfileAppInfo"

export default {
  name: "Profile",
  components: {
    NavBar,

    ProfileSignIn,
    ProfileOverage,
    ProfileMallInfo,
    ProfileAppInfo
  }
}
</script>

<style>
.nav-bar {
  background-color: var(--color-tint);
}
</style>
