<template>
  <ul class="category-slide">
    <li v-for="(item, index) in category" :key="index" 
    :class="{active: index == currentIndex}"
    @click="titleClick(index)">
      {{item.title}}
    </li>
  </ul>
</template>

<script>
export default {
  name: "CategorySilde",
  props: {
    category: Array,
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
      this.$emit("categoryTitleClick", index)
    }
  }
}
</script>

<style scoped>

.category-slide li {
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.active {
  background-color: #fff;
  color: var(--color-tint);
}

</style>