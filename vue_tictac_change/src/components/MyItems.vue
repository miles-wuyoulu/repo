<template>
  <div class="MyItems">
    <ul>
      <li v-for="tic in tics" :key = 'tic.index' @click="handleClick(tic.index)">{{tic.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MyItems",
  props:['tics','clickItem'],
  methods:{
      handleClick(index) {
          this.$emit('clickItem',index)
      }
  }
};
</script>

<style scoped>
ul {
  width: 120px;
  display: flex;
  flex-wrap: wrap;
}
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