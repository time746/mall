<template>
  <div class="toast" v-show="isShowToast">
    {{toastMessage}}
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      isShowToast: false,
      toastMessage: ""
    }
  },
  methods: {
    showToast(message, delay) {
      this.toastMessage = message
      this.isShowToast = true
      //延迟后消失
      setTimeout(() => {
        this.isShowToast = false
      }, delay)
    }
  }
  
}
</script>

<style scoped>
.toast {
  padding: 6px 8px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  background-color: rgba(0, 0, 0, .6);
  color: aliceblue;
}
</style>