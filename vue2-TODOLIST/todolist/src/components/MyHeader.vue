<template>
  <div class="todo-header">
    <!-- 绑定事件监听，按下回车添加待办事项 -->
    <input type="text" placeholder="请输入你的任务名称，按回车确认" v-model="title" @keyup.enter="add"/>
  </div>
</template>

<script>
// 引入nanoid，暴露出来的是函数可以直接调用
import {nanoid} from "nanoid"
export default {
    name:"MyHeader",
    data(){
      return{
        title:""
      }
    },
    props:["addTodo"],
    methods:{
      // add(e){
      add(){
        if(!this.title.trim()) return alert("输入不能为空")
        // 1.将用户的输入包装成一个todo对象
        // 一般id是由服务器生成的,单机练习的时候可以用随机数、时间戳、uuid（迷你版是nanoid）
        // const todoObj={id:nanoid(),title:e.target.value,done:false}
        const todoObj={id:nanoid(),title:this.title,done:false}
        // console.log(todoObj);
        // 2.传数据给app，将todoObj添加到list的前面
        this.addTodo(todoObj)
        // 3.添加完后输入框恢复空
        // 但是操作dom了，不违背原则的话可以设置数据绑定input
        // e.target.value=""
        this.title=""
        // 4.避免不输入也能按回车
        // 在1.之前加个判断

      }
    }
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>