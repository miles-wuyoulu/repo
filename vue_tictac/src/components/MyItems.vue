<template>
  <div class="MyItems">
    <ul>
      <my-item v-for="tic in tics" :key = 'tic.index' :tic = 'tic'></my-item>
    </ul>
  </div>
</template>

<script>
import MyItem from "./MyItem.vue";
export default {
  components: { MyItem },
  name: "MyItems",
  props:['tics']
};
</script>

<style scoped>
ul {
  width: 120px;
  display: flex;
  flex-wrap: wrap;
}
</style>