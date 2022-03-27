<template>
  <div id="app">
    <my-items @clickItem="clickItem" :tics="tics"></my-items>
    <his-list @clickHis="clickHis" :hisArr="hisArr"></his-list>
  </div>
</template>

<script>
import HisList from "./HistoryList.vue";
import MyItems from "./MyItems.vue";

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
  name: "MyTictac",
  data() {
    return {
      flag: "X",
      IsWin: false,
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
      curArr: [],
    };
  },

  methods: {
    //点击小Item
    clickItem(index) {
      //判断是否发生回跳
      if (this.curArr.length) {
        if (this.curArr.length != this.hisArr.length) {
          this.IsWin = false;
          this.hisArr = this.curArr;
          this.flag = this.hisArr.at(-1).title === "X" ? "O" : "X";
        }
        this.curArr = [];
      }
      //判断是否有获胜者 或 满不满足条件填入
      if (this.IsWin || this.tics[index].title != "") return;

      this.tics[index].title = this.flag;
      this.hisArr.push({ hIndex: index, hTitle: this.tics[index].title });

      let indexX = this.tics.filter((p) => p.title === "X").map((v) => v.index);
      this.IsWin = jdgArr.some((p) => p.every((v) => indexX.includes(v)));

      this.flag = this.flag === "X" ? "O" : "X";
    },

    //点击his
    clickHis(idx) {
      this.curArr = this.hisArr.slice(0, idx + 1);
      this.tics.forEach((element) => {
        let i = this.curArr.findIndex((v) => v.hIndex == element.index);
        element.title = i == -1 ? "" : this.curArr[i].hTitle;
      });
    },
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
