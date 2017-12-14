<template>
  <div id="app" class="light page">
    <transition :name="transitionName">
      <keep-alive>
        <router-view class="RouterView"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        transitionName: 'slide-left'
      }
    },
    watch: {
      '$route'(to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        console.log(this.transitionName)
      }
    }
  }
</script>

<style lang="less">
  @import 'assets/skin.less';
  @import 'assets/mixin.less';
  .RouterView {
    position: absolute;
    width: 100%;
    transition: all 0.28s ease-in;
    top: 0;
    height: 100vh;
    background: #fff;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    .van-nav-bar {
      height: 44px;
      line-height: 44px;
    }
    .van-tabs__wrap {
      box-shadow: 0 3px 5px 0px rgba(0, 0, 0, .1);
      margin-top: 40px;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    }
    .van-tabbar {
      box-shadow: 1px -1px 5px rgba(0, 0, 0, .1);
    }
  }
  .page {
    background: #fff; // height: 100%;
  }
  .sticker {
    height: auto;
    padding: 0 0 40px 0;
    min-height: 100vh;
    box-sizing: border-box;
  }
  .stickerCon {
    padding-bottom: 40px;
    box-sizing: inherit;
  }
  .sfooter {
    margin-top: -40px;
    height: 40px;
    width: 100%;
    text-align: center;
    line-height: 40px;
    color: #ABA498;
    font-size: 12px;
    background: #fafafa;
    position: relative;
    z-index: 9;
    .b_t();
  }
  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0; // -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }
  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 1; // -webkit-transform: translate(-100%, 0);
    // transform: translate(-100% 0);
  }
</style>
