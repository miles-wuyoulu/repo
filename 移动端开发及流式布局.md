# 移动端开发及流式布局

## 移动端开发选择

网站域名前面加上m是打开移动端布局

- 单独制作移动端页面（主流）

- **响应式**页面兼容移动端（其次）

  制作麻烦，需要考虑多端布局下的问题，代码只有一套

## 移动端技术解决方案

移动端的浏览器基本上是以webkit内核为主，故此开发的时候只需要考虑webkit兼容问题即可

可以使用H5和C3的样式

浏览器的私有前缀只需考虑加webkit前缀即可

- 移动端CSS初始化加载normalize.css(响应式Bootstrap中的文件已经包含了此文件)   http://necolas.github.io/normalize.css/
- box-sizing: border-box 中padding和border值会撑开盒子大小
- box-sizing： content-box 中padding和border不会撑开盒子的大小

## 移动端特殊样式

- box-sizing
- -webkit-box-sizing
- -webkit-tap-highlight-color:transparent 清除点击高亮，设置为transparent透明
- -webkit-appearance: none 移动端浏览器的**按钮**和**输入框**只有加上这个属性的时候才可以给其自定义样式
- img a { -webkit-touch-callout: none}禁用长按时弹出菜单

## 移动端技术选型

- 单独制作页面时
- - 流式布局（百分比布局）
  - flex布局（流式布局）
  - less+rem+媒体查询
  - 混合布局
- 响应式布局
  - 媒体查询
  - Bootstrap

## 流式布局

- 流式布局 百分比布局 非固定像素布局

- 通过盒子宽度设置成为百分比来进行伸缩，不受固定像素的影响

  

