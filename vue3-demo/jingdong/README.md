# jingdong

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).





## 项目搭建过程记录

### 0-准备

#### 1.工程初始化

使用脚手架初始化项目，并整理（删掉vue页面相关内容）

#### 2.环境配置

插件：eslint、vetur

搜包网站：https://www.npmjs.com/

包：normalize.css（统一不同浏览器的样式差异

![image-20221114224914440](/Users/puluotagela/Library/Application Support/typora-user-images/image-20221114224914440.png)

——安装normalize.css的报错解决方法：

--legacy-peer-deps

#### 3.清除默认样式

引入normalize.css

写点样式测试



### 页面1-首页

#### 目标

![image-20221122204601635](/Users/puluotagela/Library/Application Support/typora-user-images/image-20221122204601635.png)

#### s1.底部菜单docker

![image-20221122204619371](/Users/puluotagela/Library/Application Support/typora-user-images/image-20221122204619371.png)

##### 1.布局尺寸边框

用rem，先给html设置font-size=100px方便换算

（为什么要设置border-sizing，怎么不设置会多一个下边距的

![image-20221122204407911](/Users/puluotagela/Library/Application Support/typora-user-images/image-20221122204407911.png)

![image-20221122204342952](/Users/puluotagela/Library/Application Support/typora-user-images/image-20221122204342952.png)

##### 2.图标iconfont

https://www.iconfont.cn/

选择图标——添加到购物车——添加到项目——下载——复制代码`@font-face`、`.iconfont {`——挑选相应图标并获取字体编码，应用于页面`<span class="iconfont">&#x33;</span>`

bug：iconfont用unicode引用方式使用，图标显示不出来![image-20221122225644989](/Users/puluotagela/Library/Application Support/typora-user-images/image-20221122225644989.png)

原因：

![image-20221123000051570](/Users/puluotagela/Library/Application Support/typora-user-images/image-20221123000051570.png)

红色：两处名字要一致；

蓝色：用的时候属性名要一致；

黄色：下载下来的demo.css的远程链接是错的要去网站上复制正确的链接（iconfont.css里是本地地址）

##### 3.图标选中样式

BEM的class命名规则: block__element--modifier

#### s2.顶部地址条

地址图标不完全垂直居中——手动相对定位调整

样式不生效——检查计算优先级调整一下优先级

#### s3.搜索

细节在于文字垂直居中

#### s4.banner

图片加载过程需要防抖——提前用padding-bottom撑开高度

#### s5.图标列表

img行内块元素，可以设置宽高，但要设置居中要转成块元素

#### s6.附近店铺

写样式时注意嵌套的层级

#### 代码优化

##### 拆分组件

先从app拆出去

Views——home——home.vue

再拆：顶部静态页面、附近店铺、底部

name不写的话会以文件名为组件名，影响vue devtool的组件名显示（还影响别的吗？

##### 拆出数据

把可以通过v-for遍历出来的dom节点都整理一下，减少代码量

v-for可以嵌套

结合模板字符串，给图片地址的部分内容绑定变量

```vue
 <img
                :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`"
                class="icons__item__img"
```



### 页面2-登录注册

#### 登录页面——

##### 1.布局样式

绝对定位居中技巧

input样式border outline background

input外为什么要包一层？

Input placeholder

###### 常用颜色设成变量

##### 2.路由设置

##### 2.1根据地址跳转页面

router——index.js 设置routes

##### 2.2路由守卫实现基础登录校验功能

###### 页面跳转之前验证登录权限

`router.beforeEach((to, from, next) => {`

在路由跳转的时候调用这个api，

判断是否登录，if已登录就跳转到首页，else跳去登录页面——用判断localStorage.isLogin

用登录按钮的点击事件控制登录权限isLogin（暂时不校验登录密码）

###### 登录后自动跳转到首页

```vue
import { useRouter } from 'vue-router'
const router = useRouter()
router.push({ name: 'HomePage' })  
// 这个push是为啥 路由都有哪些方法
```

###### 登录后不让再访问登录页面

```vue
const { isLogin } = localStorage
      isLogin ? next({ name: 'HomePage' }) : next()
```



此处所用路由知识点总结：

- 局部跳转校验：`beforeEnter (to, from, next) { } `//跳转到某页面前执行

- 全局跳转校验：`router.beforeEach((to, from, next) => { } `

- 获取路由实例，由js实现路由跳转：

  ```vue
  import { useRouter } from 'vue-router'
  const router = useRouter()
  router.push({name:'xxx' })
  ```

#### 注册页面——

新页面:写组件——设置路由——组件中的路由跳转事件——修改细节（密码打码、登录页细节修改）

优化——

因为注册和登录页面非常相似，可以写在一个文件里节约代码量，通过判断某个条件显示注册还是登录

但是写在一起未来扩展性会弱一点

根据情况来（如果登录注册差不多就可以写一起



### 页面3-商家展示 （9-4进行中）



### 页面4-购物车



### 页面5-我的

我的-地址管理

我的-新建地址

我的-编辑收货地址





### 







## 用scss优化css

- 允许选择器里嵌套着写，&占位

  嵌套多了的时候一定要注意层级是否正确

```scss
.docker {
  width: 100%;
  &__item { //.docker__item
    text-align: center;
    .logo {//.docker.logo
      font-size: 0.18rem;
    }
    &--active {//.docker__item--active
      color: rgb(32, 162, 249);
    }
  }
  &__title {//.docker__title
    font-size: 20px;
  }
}
```

- scss可以引入scss `@import ' ';`  把样式文件都引入index.scss里

- 定义变量 $variables：主题色

  ```scss
  variables.scss
  $content-font-color:#333;
  
  app.vue
  <style lang="scss">
  @import './style/variables.scss';
  .position{
    color: $content-font-color;
  }
  ```

  

- 把一些通用功能封装成mixin：文字过长缩略展示、

  ```scss
  mixin.scss
  //文字过长缩略...
  @mixin ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  
  app.vue
  <style lang="scss">
  @import './style/mixins.scss';
  .position{
    @include ellipsis;
  }
  ```

  



## 相关链接

##### npm搜包

https://www.npmjs.com/

##### iconfont

https://www.iconfont.cn/

##### 文本对比

http://www.jsons.cn/txtdiff/
