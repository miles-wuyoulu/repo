<template>
  <div class="MyItem">
    <li @click="handleClick(tic.index)">{{tic.title}}</li>
  </div>
</template>

<script>
export default {
  name: "MyItem",
  props:['tic'],
  methods:{
      handleClick(index) {
          this.$bus.$emit('clickItem',index)
      }
  }
};
</script>

<style scoped>
li {
  list-style: none;
  width: 40px;
  height: 40px;
  font-size: 30;
  line-height: 40px;
  text-align: center;
  color: black;
  background-color: pink;
  border: 1px solid white;
}
</style>