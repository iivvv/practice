<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo" />
        <MyList
          :todos="todos"
          :checkTodo="checkTodo"
          :deleteTodo="deleteTodo"
        />
        <MyFooter 
        :todos="todos" 
        :checkAllTodo="checkAllTodo" 
        :clearAllTodo="clearAllTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MyFooter from "./components/MyFooter.vue";
// .vue可以省略
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";

//暴露接口 ？模块化？
export default {
  name: "App",
  // 注册组件
  components: { MyHeader, MyList, MyFooter },
  data() {
    return {
      todos:
      JSON.parse(localStorage.getItem("todos"))||[]
      //  [
      //   { id: "001", title: "吃饭", done: true },
      //   { id: "002", title: "写作业", done: false },
      //   { id: "003", title: "吃饭", done: false },
      // ]
      ,
    };
  },
  methods: {
    // 添加todo
    addTodo(x) {
      // console.log("App收到了",x);
      // unshift是vue能捕捉到的数组操作
      this.todos.unshift(x);
      // 往todos前方添加了一个数据，数据发生改变，App模板自动重新解析，MyList模板自动重新解析，虚拟domdiff比较
    },
    // 勾选or取消勾选
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    // 删除
    deleteTodo(id) {
      // this.todos = this.todos.filter((todo)=>{
      //   return todo.id !==id
      // })

      // 精简写法
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    // 全选全不选
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    // 清除所有已完成的todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
  watch:{
    todos:{
      deep:true,
      handler(value){
        localStorage.setItem("todos",JSON.stringify(value))
      }
    }
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
