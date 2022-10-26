# TodoList

## 说明：

这是一个使用vue-cli（vue2）写成的ToDoList/待办事项demo

![image-20221026165751409](/Users/puluotagela/Library/Application Support/typora-user-images/image-20221026165751409.png)

## 功能：

1.输入框，添加待办事项到列表中

2.选中，完成事项

3.点击删除按钮，删除事项

4.全选全不选

5.显示统计数量：已完成n/全部n



## 思路过程（组件化编码通用流程）：

### 第一步.实现静态组件：

##### 1.抽取几个小组件？

拆成四个小组件（app=MyHeader+MyList（=MyItem+）+MyFooter），创建四个组件文件（<v回车生成模板），在对应位置import注册使用

**注意点：**小组件命名避让关键词/html标签名，鼓励多个单词语义化命名，eg.UserHeader

##### 2.使用组件实现静态页面效果

写各个组件的html结构和css样式

**注意点：**公共样式写在app组件里，小组件里记得写`<style scoped>`

### 第二步.展示动态数据：

##### 1.用什么数据类型？

——存一堆数据用[] 或{}

[ {id:"001",title:"xxx",done:true},{  },{  }]

**注意点：**id用字符串（最好用哈希值）表示，因为数值是有尽头的

##### 2.数据存在哪个组件？

谁用就先给谁——MyList（后期若数据传递有困难再调整）

根据数据数量再决定小组件（MyItem）数量，用v-for遍历

`<MyItem v-for="todo in todos" :key="todo.id"/>`

##### 3.子组件如何用到父组件的数据

**props配置项：**

父组件：`<MyItem v-for="todo in todos" :key="todo.id" :todo="todo"/>`

子组件：`props:["todo"],`

### 第三步.实现交互功能：

#### 功能1:输入框按下回车添加代办事件

##### 1.绑定事件监听

`<input type="text" placeholder="请输入你的任务名称，按回车确认" @keyup.enter="add"/>`

##### 2.配置methods，写add事件

###### 2.1将用户的输入包装成一个todo对象

```vue
methods:{
      add(e){
        // 将用户的输入包装成一个todo对象
        // 一般id是由服务器生成的,单机练习的时候可以用随机数、时间戳、uuid（很大，所以用迷你版的nanoid）
        const todoObj={id:nanoid(),title:e.target.value,done:false}
        console.log(todoObj);
      }
    }
```

###### 2.2将todo对象传给MyList添加到list前方

**难点：**兄弟组件间传递数据

**初级解决方法：**把数据传给父组件，再由父组件传给兄弟组件（这样比兄弟组件传数据更简单一点，以初学者的知识量）

<font color="#dd0000"> 子传父：App methods配置 一个函数addTodo(x)，传给MyHeader，MyHeader props接收（addTodo函数就出现在了vc实例对象上，可以用this调用），调用this.addTodo（x）函数传参，App就收到了参数</font>

父传兄：todos数据调整保存位置（MyList——App），MyList设置props接收数据

###### 2.3完善细节

a 回车后输入框内容清空

b 空内容禁止回车





## 相关文档

### vue2

https://v2.cn.vuejs.org/v2/guide/

### vue-cli



### nanoid