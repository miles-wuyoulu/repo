# flex 布局

## flex布局原理

- 传统布局

  兼容性好 布局繁琐 局限性，不能在移动端很好的布局

- flex 弹性布局

  操作方便，布局极为简单，移动端应用广泛

  PC端浏览器支持性差

  ### 原理

  - flex 为盒装模型提供了最大的灵活性，任何一个容器都可以指定flex布局
  - 当父盒子指定flex布局的时候，子元素的float clear vertical-align属性都将失效
  - 总结：通过给父盒子添加flex属性，来控制子元素的位置和排列方式

  

## 主轴

- flex-direction设置主轴
- flex 分为主轴和侧轴
- row 从右到左
- row-reverse 从右到左
- column 从上到下
- column-reverse 从下到上

## 主轴分布方式

- justify-content 定义项目在主轴上面的排列方式
- flex-start：默认从头部开始，若主轴时下，则从左到右
- flex-end 从尾部开始排列
- center：在主轴居中对齐（若主轴时x轴，则水平居中）
- space-around：平分剩余空间
- **space-between**：先两边贴齐再平分剩余空间

## 子元素换行

- flex-warp
- 默认情况下项目都排列在一条水平线，不换行
- nowarp：默认值不换行
- warp：换行
- 百分比布局中可以通过设置父项和子项的宽度来达到换行的目的，默认不换行
- 注意再子项中加上 flex:20% 这种百分比权重也可以识别换行

## 侧轴排列

- 单行找align-items 多行找align-content

- align-items
  - 该属性控制子项再侧轴上面的排序方式 **注意是在子项时单行的时候去使用**
  - flex-start
  - flex-end
  - center
  - stretch:拉伸
- align-content
  - 该布局仅用于在子项出现换行的情况下，在当单行下没有效果
  - flex-start  默认值从侧轴的头部开始
  - flex-end 在侧轴的尾部开始排列
  - center 在侧轴的中间开始排列
  - space-around 子项在侧轴平分剩余空间
  - space-between 子项先分布在侧轴两侧，剩下的平分剩余空间
  - stretch 设置子项元素高度平分父元素高度



## flex-flow 复合写法

- 复合 flex-direction 和 flex-warp 的写法
- 例如：flex-flow：column warp

## 子项常见属性

- flex 子项目占有份数

- align-self 控制子项自己在侧轴的排序方式

  允许当个项目在侧轴有自己的对齐方式，可以覆盖align-items属性

  默认继承父元素的align-items属性 ，如果没有父元素，则等同于stretch

- order 定义子项的排列顺序

   order 数值越小，排列越靠前，跟z-index 不一样

















