<template>
    <div>
        <div class="position">
            <span class="logo position__icon">&#xe62f;</span>
            北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层
            <span class="logo position__notice">&#xe7ce;</span>
        </div>
        <div class="search">
            <span class="logo">&#xe8b9;</span>
            山姆会员商店优惠商品
        </div>
        <div class="banner">
            <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt="banner" />
        </div>
        <div class="icons">
            <div
            v-for="item in iconList"
            :key="item.title"
            class="icons__item">
                <img
                :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`"
                class="icons__item__img"
                />
                <p class="icons__item__desc">{{item.title}}</p>
            </div>
        </div>
        <div class="gap"></div>
    </div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconList = [
      { imgName: '超市', title: '超市便利' },
      { imgName: '菜市场', title: '菜市场' },
      { imgName: '水果店', title: '水果店' },
      { imgName: '鲜花', title: '鲜花绿植' },
      { imgName: '医药健康', title: '医药健康' },
      { imgName: '家居', title: '家居时尚' },
      { imgName: '蛋糕', title: '烘焙蛋糕' },
      { imgName: '签到', title: '签到' },
      { imgName: '大牌免运', title: '大牌免运' },
      { imgName: '红包', title: '红包套餐' }
    ]
    return { iconList }
  }

}
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
@import "../../style/mixins.scss";

.position {
    @include ellipsis;
    position: relative;
    margin: 0.16rem 0;
    padding: 0 0.2rem 0 0;
    line-height: 0.22rem;
    font-size: 0.16rem;
    color: $content-font-color;

    .position__icon {
        //优先级高于&__icon
        position: relative; //手动调整图标垂直居中
        top: 0.01rem; //手动调整图标垂直居中
        font-size: 0.2rem;
        // margin-right:.08rem ;
    }

    .position__notice {
        position: absolute;
        right: 0;
        top: 0.01rem;
        font-size: 0.2rem;
    }
}

.search {
    margin-bottom: 0.12rem;
    line-height: 0.32rem;
    background-color: #f5f5f5;
    color: #b7b7b7;
    border-radius: 0.16rem;
    font-size: 0.14rem;

    .logo {
        font-size: 0.16rem;
        padding: 0 0.12rem 0 0.16rem;
    }
}

.banner {
    height: 0;
    overflow: hidden;
    padding-bottom: 25.4%;

    &__img {
        width: 100%;
    }
}

.icons {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.16rem;

    &__item {
        width: 20%;

        &__img {
            display: block;
            width: 0.4rem;
            height: 0.4rem;
            margin: 0 auto;
        }

        &__desc {
            text-align: center;
            margin: 0.06rem 0 0.16rem 0;
            color: $content-font-color;
        }
    }
}

.gap {
    height: 0.1rem;
    background-color: $content-bg-color;
    margin: 0 -0.18rem;
}
</style>
