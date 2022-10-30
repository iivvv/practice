<template>
  <li>
    <label>
      <!-- checked默认勾上 -->
      <!-- <input type="checkbox" checked /> -->
      <!-- 但是应该根据数据动态地决定是否勾选 -->
      <!-- 事件回调传参，函数加（） -->
      <!-- input type是checkbox时，如果v-model绑定的是布尔值，那么布尔值默认决定是否勾选,
      可以用v-model="todo.done"代替handleCheck函数 -->
      <input
        type="checkbox"
        :checked="todo.done"
        @click="handleCheck(todo.id)"
      />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  // 声明接收MyList传来的todo对象
  props: ["todo", "checkTodo","deleteTodo"],
  methods: {
    // 切换完成状态
    handleCheck(id) {
      // console.log(id);
      this.checkTodo(id);
    },
    // 删除待办事项
    handleDelete(id){
      if(confirm("确定删除吗？")){
        this.deleteTodo(id)
      }
    },
  },
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
li:hover {
  background-color: rgb(212, 212, 212);
}
li:hover button {
  display: block;
}
</style>