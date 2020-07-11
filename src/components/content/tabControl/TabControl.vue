<template>
  <div class="tab-control">
    <div v-for="(title, index) in titles" 
    :key="title" 
    :class="{itemActive: currentIndex == index}" 
    @click="itemClick(index)">
      {{title}}
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit("tabClick", index)
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  justify-content: space-around;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #fff;
}

.tab-control div {
  padding: 0 4px 0;
}

.itemActive {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-high-text);

}

</style>