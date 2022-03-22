<template>
  <div id="app">
    <my-items :tics="tics"></my-items>
    <his-list :hisArr="hisArr"></his-list>
  </div>
</template>

<script>
import HisList from "./components/hisList.vue";
import MyItems from "./components/MyItems.vue";

const jdgArr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
export default {
  components: { MyItems, HisList },
  name: "App",
  data() {
    return {
      tics: [
        { index: 0, title: "" },
        { index: 1, title: "" },
        { index: 2, title: "" },
        { index: 3, title: "" },
        { index: 4, title: "" },
        { index: 5, title: "" },
        { index: 6, title: "" },
        { index: 7, title: "" },
        { index: 8, title: "" },
      ],
      hisArr: [],
      curArr: []
    };
  },
  computed: {
    // 判断 X 和 O 的个数，决定往里面插入的值
    countXO() {
      let countX = this.tics.reduce(
        (pre, current) => (pre += current.title === "X" ? 1 : 0),
        0
      );
      let countO = this.tics.reduce(
        (pre, current) => (pre += current.title === "O" ? 1 : 0),
        0
      );
      return countX > countO ? "O" : "X";
    },
    //判断当前tics 里面是否有获胜者
    iswinner() {
      let indexX = this.tics.filter((p) => p.title === "X").map((v) => v.index);
      let indexO = this.tics.filter((p) => p.title === "O").map((v) => v.index);
      let Xwin = jdgArr.some((p) => p.every((v) => indexX.includes(v)));
      let Owin = jdgArr.some((p) => p.every((v) => indexO.includes(v)));
      if (Xwin || Owin) {
        let who = Xwin ? "X" : "O";
        return { iswin: true, whowin: who };
      } else {
        return { iswin: false, whowin: "" };
      }
    },
  },
  methods: {
    //点击小Item
    clickItem(index) {
      if (this.iswinner.iswin || this.tics[index].title != "") return;
      if(this.curArr.length){
        this.hisArr=this.curArr.slice(0,this.curArr.length);
        this.curArr = [];
      }
      this.tics[index].title = this.countXO;
      this.hisArr.push({ hIndex: index, hTitle: this.tics[index].title });
    },
    //点击his
    clickHis(idx){
      this.curArr = this.hisArr.slice(0,idx+1);
      this.tics.forEach(element=>{
        let i = this.curArr.findIndex(v=>v.hIndex == element.index);
        console.log(i)
        element.title = (i == -1 ? '':this.curArr[i].hTitle); 
      })
    }
  },
  mounted() {
    //点击游戏
    this.$bus.$on("clickItem", this.clickItem);
    //点击回跳
    this.$bus.$on('clickHis',this.clickHis);
  },
  beforeDestroy() {
    this.$bus.$off("clickItem");
    this.$bus.$off('clickHis');
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  cursor: default;
}
</style>
