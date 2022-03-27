<template>
  <div>
      <ul>
    <li
      v-for="(hi, index) in hisArr"
      :key="index"
      @click="handleClick(index)"
    >返回第：{{ index+1 }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HistoryList',
  props: ['hisArr','clickHis'],
  methods: {
      handleClick(index){
          this.$emit("clickHis",index)
      }
  }
};
</script>
