# TodoList

## 说明：

这是一个使用vue-cli（vue2）写成的ToDoList/待办事项demo

![image-20221026165751409](/Users/puluotagela/Library/Application Support/typora-user-images/image-20221026165751409.png)

## 功能：

1.输入框，添加待办事项到列表中

2.勾选/取消勾选，完成/未完成事项

3.点击删除按钮，删除事项

4.显示统计数量：已完成n/全部n

5.全选全不选

6.点击按钮清除已完成的任务

7.数据使用浏览器本地存储，刷新页面不丢失数据



## 思路过程（组件化编码通用流程）：

### 第一步.拆分静态组件：

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

（思路：获取输入数据，添加到组件MyList中）

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

<font color="#dd0000"> 子传父：App methods配置 一个函数**addTodo(x)**，传给MyHeader，MyHeader props接收（addTodo函数就出现在了vc实例对象上，可以用this调用），调用this.addTodo（x）函数传参，App就收到了参数</font>

**注意点：**methods、data、props配置的东西最后都会出现在vc身上，所以别重名

父传兄：todos数据调整保存位置（MyList——App），MyList设置props接收数据

###### 2.3完善细节

a 回车添加完待办后输入框内容清空

b 空内容禁止回车（在事件一开始的时候加一个内容判断）



#### 功能2:勾选/取消勾选 切换完成状态

（思路：获取对应事件id，修改done值）

##### 1.绑定事件监听

MyItem组件绑定事件

`@click="handleCheck(todo.id)"`

`@change`也可以

##### 2.获取对应事件id

回调函数传参数获取id

##### 3.通知App组件将done值取反

###### 方法一：配置methods方法

数据在哪里，操作就在哪

取反done值的函数写在App组件里，给MyItem调用

App——MyList——MyItem（爷爷组件传给孙子得先给爸爸组件（还未解锁事件总线？知识点）

###### 方法二：v-model绑定todo.done（省代码，但不推荐，vue不建议修改props）

原理：input type是checkbox时，如果v-model绑定的是布尔值，那么布尔值默认决定是否勾选

**注意点**：todo是props传来的数据，是只读的，（但是这个案例中成功改了done的值，控制台也没报错（如果直接绑定一个布尔值修改了会出错））修改了todo**对象**里的某一个属性的话，vue监测不到，vue的监测是浅层的



#### 功能3:删除待办事项

（思路：点击获取该事项id，根据id删除数据）

##### 1.绑定事件、获取对应事件id

回调函数传参数获取id`@click="handleDelete(todo.id)"`

##### 2.删除：过滤掉该待办事项

数据在App那，方法就写在App那，传给MyItem调用

```vue
App：
deleteTodo(id){
      //filter，不改变原数组，返回符合条件的数组
      this.todos = this.todos.filter((todo)=>{
        return todo.id !==id
      })
    },

MyItem：
handleDelete(id){
			//弹窗提示
      if(confirm("确定删除吗？")){
        this.deleteTodo(id)
      }
    },
```



#### 功能4.已完成a/全部b

（思路：需要拿到todos数据，再计数）

全部：{{todos.length}}

已完成：遍历todos，**统计done=true的数量**，使用computed

```
统计方法一：普通
 doneTotal(){
        let i = 0
        this.todos.forEach((todo)=>{
          if(todo.done) i++
        }) 
        return i
      }
统计方法二：reduce（专门用于条件统计）
	doneTotal(){
				return this.todos.reduce((pre,current)=> pre + (current.done ? 1:0),0)
      }

```



#### 功能5.全选、全不选、（自动判断是否全选/不选）

方法一： `：checked="isALl" @change="checkAll" `

方法二：`v-model="isAll"`

用计算属性判断a===b?

**注意点：**v-model=计算属性时，因为双向绑定会修改计算属性不能用简写形式，需要配置setter

```
isAll:{
        get(){
          return this.doneTotal === this.total && this.total > 0
        },
        set(value){
          this.checkAllTodo(value)
        },
      },
```



#### 功能6.清除已完成的任务

1.绑定事件`@click="clearAll"`

2.app写方法传给组件在事件中调用

```
App:
clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
    
MyFooter:  
clearAll(){
        this.clearAllTodo()
      },
```



#### 功能7.本地存储数据，刷新页面不丢失数据

```
data() {
    return {
      todos:JSON.parse(localStorage.getItem("todos"))
  },

watch:{
    todos(value){
      localStorage.setItem("todos",JSON.stringify(value))
    }
  },
```

1.用watch监视数据，数据有变化就再往local storage里存

**bug1：**done的变化监视不到，只有增加删除能监视到

解决：watch别用简写，写完整，开启深度监视

2.刷新页面加载数据时得从localstorage里读取

**bug1：**报错：MyFooter里length是null

![image-20221030150529872](/Users/puluotagela/Library/Application Support/typora-user-images/image-20221030150529872.png)

原因：初始化时localstorage没有数据，getitem获得的是null

解决：加 `||[]`











## 总结：

1.组件化编码流程:

（1）拆分静态组件:组件要按照功能点拆分，命名不要与html元素冲突。
（2）实现动态组件:考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：
		1）一个组件在用:放在组件自身即可。
		2）一些组件在用:放在他们共同的父组件上**（状态提升）**。
（3）实现交互:从绑定事件开始。

2.props适用于:
（1）父组件＝＝＞子组件 通信
（2）子组件＝＝＞父组件 通信（要求父先给子一个函数）

3.使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的！

4.vue对props是浅层监视，props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。

5.其他

插值语法要简单一点，多用计算属性

配置项都要以逗号结尾隔开！

有时候报错是因为有某个文件没保存

unshift是vue能捕捉到的数组操作



## 相关文档

### vue2

https://v2.cn.vuejs.org/v2/guide/

### vue-cli



### nanoid