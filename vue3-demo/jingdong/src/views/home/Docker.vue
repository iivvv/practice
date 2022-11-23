<template>
  <div class="docker">
    <div
    v-for="(item,index) in dockerList" :key="item.icon"
    :class="{'docker__item':true, 'docker__item--active':index===0}"
    >
      <div class="logo" v-html="item.icon"></div>
      <div class="docker__title">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomDocker',
  setup () {
    const dockerList = [
      { icon: '&#xe68d;', text: '首页' },
      { icon: '&#xe6e8;', text: '购物车' },
      { icon: '&#xe60c;', text: '订单' },
      { icon: '&#xe612;', text: '我的' }
    ]
    return { dockerList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.docker {
  background-color: #ffffff;
  color: $content-font-color;
  padding: 0 0.18rem;
  box-sizing: border-box; //why
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid rgb(236, 236, 236);
  &__item {
    flex: 1;
    text-align: center;
    .logo {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
    &--active {
      color: rgb(32, 162, 249);
    }
  }
  &__title {
    font-size: 0.2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
