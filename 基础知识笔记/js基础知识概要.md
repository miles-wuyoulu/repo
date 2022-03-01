# 有用的字符串方法
| 方法 | 介绍
- | -
| length | 字符串长度
| indexOf("") | 字符串里面是否包含子字符串，若是，返回首字符下标，没有返回-1 (只对第一个有用)
| slice(0,3) | 截取下标从0到3的子字符串（不包括3），若只有一个值，则截取从下标到最后的子字符
| str.toLowerCase(); | 转小写   
| str.toUpperCase(); | 转大写   
| replace('abc','xyz') | 字符串里面的abc转换成xyz（只对第一个有用）

# 事件
## 事件对象 e 
* e.target 指向当前触发事件的元素
* e.preventDefault() 阻止默认行为，比如阻止表单的提交
* e.stopPropagetioon() 阻止事件冒泡  
* 事件委托

# 数组Array
<strong>遍历</strong>

```javascript
    fruits.forEach(function(item元素, index下标, array) {
  console.log(item, index)
   })
   // Apple 0
   // Banana 1
```

| 方法 | 属性
- | -
| arr.pop() | 末尾删除一个元素
| arr.shift() | 头部删除一个元素
| arr.push(元素，元素) | 末尾插入一个或多个元素
| arr.unshift(元素，元素) | 头部插入一个或多个元素
| arr.indexOf(元素) | 查找某个元素的下标
| arr.splice(pos,n) | 从pos位置开始（包括）删除n个元素，返回的仍是一个数组（被删除的元素组合而成） 
| arr.slice() | 复制一个数组

## 构造器 Array()
* Array() 创建一个新的数组对象
* Array.isArray() 判断是否是一个数组对象
* Array.of() 根据一组参数来创建新的数组实例
* Array.prototype.length 数组元组中的个数

## 实例方法
| 方法 | 说明
- | -
| arr.at() |  根据下标返回元素，如果下标是负数，则从尾部开始返回
| arr.concat() | 拼接数组，里面可以是多个数组，数  
| arr.copyWithin() | 浅复制 里面一个参数表示从头部开始的数复制到该下标到结尾，两个参数表示第第一个数位置是被替换的，三个参数是第一个位置是被替换的，后面两个表示替换的数的起始位
| arr.every() | 里面跟一个函数，判断所有元素是否满足某些条件，是返回true 否返回false
| arr.map() | 返回一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值
| arr.join() | 数组转字符串
| arr.fill() | 里面跟三个参数 第一个是替换的数，第二跟第三个数是起始位（不包括第三个数）
| arr.filter() |  里面跟一个函数，判断是否满足某些条件，是的话函数返回true，然后返回一数组，筛选出满足条件的数组
| arr.find() |  返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
| arr.findIndex() |  返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回 -1
| arr.includes() |  判断一个数组是否包含一个指定的值，如果包含则返回 true，否则返回 false
| arr.indexOf() |  返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回 -1
| arr.lastIndexOf | 返回指定元素在数组中的最后一个的索引，如果不存在则返回 -1  
| arr.sort() |  排序








