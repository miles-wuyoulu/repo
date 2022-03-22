<template>
  <div>
      <ul>
    <his-item
      v-for="(hi, index) in hisArr"
      :key="index"
      :index="index"
    ></his-item>
    </ul>
  </div>
</template>

<script>
import hisItem from './hisItem.vue'

export default {
  name: "hisList",
  components: { hisItem },
  props: ["hisArr"],
};
</script>

<style>
</style>