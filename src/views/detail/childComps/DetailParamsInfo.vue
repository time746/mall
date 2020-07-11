<template>
  <div class="params-info">
    <table class="goods-info">
      <tr v-for="(tr, index) in goodsParams.table" :key="index">
        <td v-for="(td, indey) in tr" :key="indey">{{td}}</td>
      </tr>
    </table>
    <table>
      <tr v-for="(tr, index) in goodsParams.key" :key="index">
        <td>{{tr.key}}</td>
        <td>{{tr.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  props: {
    goodsParams: {
      type: Object,
      default: () => ({})
    }
    
  }
}
</script>

<style scoped>
.params-info table {
  width: 100vw;
  font-size: 12px;
  text-align: center;
  border-collapse: collapse;
}
.params-info table tr {
  height: 40px;
  
}
.params-info table tr td {
  border-bottom: 1px solid #eee;
}
.params-info table tr :first-child {
  width: 40px;
}

</style>