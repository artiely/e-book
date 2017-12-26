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
        transitionName: 'enter'
      }
    },
    watch: {
      '$route': {
        handler(val, oval) {
          console.log('this is router', this.$router.isBack)
          let isBack = this.$router.isBack
          if (isBack) {
            this.transitionName = 'leave'
            this.inOut = false
            if (val.path === '/login') {
              this.$router.push('/index')
            }
          } else {
            this.transitionName = 'enter'
          }
          this.$router.isBack = false
        }
      }
    },
    methods: {}
  }
</script>

<style lang="less">
  @import 'assets/skin.less';
  @import 'assets/mixin.less';
  @import 'assets/cover.less';
  * {
    margin: 0;
    padding: 0;
  }
  .RouterView {
    position: absolute; // width: 100%;
    height: 100%;
    transition: all 0.28s ease-in;
    top: 0; // height: 100vh;
    left: 0;
    bottom: 0;
    right: 0; // // overflow: scroll;
    background: #fff;
    overflow: hidden; // 解决了ios下头脚拉动错误
    transform: translateZ(0px)
  }
  .cube-scroll-wrapper {
    background: none;
    .cube-scroll-content {
      background: none;
    }
  }
  .__has-clock__ {
    background: #f00;
    color: #fff;
  }
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  #app {
    font-family: 'microsoft Yahei', 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    .van-nav-bar {
      height: 44px;
      line-height: 44px;
      z-index: 2;
    }
    .van-tabbar {
      box-shadow: 1px -1px 5px rgba(0, 0, 0, .1);
    }
  }
  body {
    height: 100vh;
    overflow: hidden;
  }
  .page {
    background: rgb(248, 252, 247);
    height: 100vh;
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
  } // enter-class - string
  // leave-class - string
  // appear-class - string
  // enter-to-class - string
  // leave-to-class - string
  // appear-to-class - string
  // enter-active-class - string
  // leave-active-class - string
  // appear-active-class - string
  .enter-enter {
    opacity: 0.5;
    -webkit-transform: scale(.5, .5);
    transform: scale(.5, .5);
  }
  .leave-leave-active {
    opacity: 0.5; // -webkit-transform: scale(.5, .5); //  transform: scale(.5, .5);
    transform: translateX(400px);
  }
  .enter-leave-active {
    opacity: 0.5;
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
  .leave-enter {
    opacity: .5;
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
</style>
