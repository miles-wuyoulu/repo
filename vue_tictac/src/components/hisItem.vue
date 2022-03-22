<template>
  <div>
    <li @click="handleClick">返回第：{{ index+1 }} 步</li>
  </div>
</template>

<script>
export default {
  name: "hisItem",
  props: ["index"],
  methods: {
      handleClick(){
          this.$bus.$emit("clickHis",this.index)
      }
  },
};
</script>

<style>
</style>