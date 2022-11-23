<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <div
    v-for="item in nearbyList"
    :key="item.id"
    class="nearby__item"
    >
      <img :src=item.imgUrl class="nearby__item__img"/>
      <div class="nearby__content">
        <div class="nearby__content__title">{{item.title}}</div>
        <div class="nearby__content__tags">
          <span
          v-for= '(innerItem,index) in item.tags'
          :key="index"
          class="nearby__content__tag">{{innerItem}}</span>
        </div>
        <p class="nearby__content__highlight">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NearBy',
  setup () {
    const nearbyList = [{
      id: 1,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      title: '沃尔玛',
      tags: ['月售1万+', '起送¥0', '基础运费¥5'],
      desc: 'VIP尊享满89元减4元运费券（每月3张）'
    }, {
      id: 2,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      title: '沃尔玛',
      tags: ['月售1万+', '起送¥10', '基础运费¥15'],
      desc: '满89元减4元'
    }]
    return { nearbyList }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
.nearby {
  &__title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    font-weight: normal;
    color: $content-font-color;
  }
  &__item {
    display: flex;
    padding-top: 0.12rem;
    &__img {
      display: block;
      margin-right: 0.16rem;
      width: 0.56rem;
      height: 0.56rem;
    }
  }
  &__content {
    padding-bottom: 0.12rem;
    border-bottom: 1px solid $content-bg-color;
    flex: 1;
    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
    }
    &__tags {
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $content-font-color;
    }
    &__tag {
      margin-right: 0.16rem;
    }
    &__highlight {
      color: #e93b3b;
      margin: 0.08rem 0 0 0;
      font-size: 0.13rem;
      line-height: 0.18rem;
    }
  }
}
</style>
