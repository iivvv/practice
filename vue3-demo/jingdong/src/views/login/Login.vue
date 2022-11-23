<template>
    <div class="wrapper">
        <img src="http://www.dell-lee.com/imgs/vue3/user.png" alt="" class="wrapper__img">
        <div class="wrapper__input">
            <input type="text" class="wrapper__input__content" placeholder="请输入手机号">
        </div>
        <div class="wrapper__input">
            <input type="text" class="wrapper__input__content" placeholder="请输入密码">
        </div>
        <div class="wrapper__login-button">登录</div>
        <div class="wrapper__login-link">立即注册</div>
    </div>
</template>

<script>
export default {
  name: 'LoginPage'
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.wrapper{
    // background-color: #fff;
    position: absolute;
    top:50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    &__img{
        width: .66rem;
        height: .66rem;
        display: block;
        margin: 0 auto .4rem auto;
    }
    &__input{
        background-color: #f9f9f9;
        height: .48rem;
        margin: 0 .4rem .16rem .4rem;
        border: 1px solid rgba($color: #000000, $alpha: 0.1);
        border-radius: .06rem;
        padding: 0 .16rem;
        &__content{
            width: 100%;
            line-height: .48rem;
            font-size: .16rem;
            border: none;
            background: none;
            outline: none;
            color: $content-notice-color;
            // background-color: aqua;
            &::placeholder{
                // color: rgba(0, 0, 0, 0.5);
            }
        }
    }
    &__login-button {
        background-color: #0091ff;
        box-shadow: 0 .04rem .08rem 0 rgba(0,145,225,0.32);
        border-radius: .04rem;
        color: #fff;
        margin: .32rem .4rem .16rem .4rem;
        line-height: .48rem;
        text-align: center;
        font-size: .16rem;
    }
    &__login-link{
        font-size: .14rem;
        text-align: center;
        color: $content-notice-color;;
    }
}
</style>
