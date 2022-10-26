<template>
  <li>
    <label>
      <!-- checked默认勾上 -->
      <!-- <input type="checkbox" checked /> -->
      <!-- 但是应该根据数据动态地决定是否勾选 -->
      <input type="checkbox" :checked="todo.done" />
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" style="display: none">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  // 声明接收MyList传来的todo对象
  props:["todo"],




};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>