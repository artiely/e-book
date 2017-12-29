<template>
  <div ref="app" class="app page">
    <transition :name="transitionName">
      <router-view class="RouterView"></router-view>
    </transition>
    <!--<van-nav-bar title="标题" fixed leftText="返回" rightText="按钮" leftArrow @click-left="onClickLeft" @click-right="onClickRight" />-->
    <van-tabbar v-model="active" class="footer" ref="footer">
      <van-tabbar-item icon="shop" to="index">
        <span>头条</span>
        <div slot="icon" slot-scope="props">
          <i class="iconfont icon-toutiao"></i>
        </div>
      </van-tabbar-item>
      <van-tabbar-item icon="chat" dot to="love">
        <span>专栏</span>
        <div slot="icon" slot-scope="props">
          <i class="iconfont icon-zhuanlan_jiemu"></i>
        </div>
      </van-tabbar-item>
      <van-tabbar-item icon="records" info="5" to="find">
        <span>发现</span>
        <div slot="icon" slot-scope="props">
          <i class="iconfont icon-faxian"></i>
        </div>
      </van-tabbar-item>
      <van-tabbar-item icon="gold-coin" info="20" to="user">
        <span>我的</span>
        <div slot="icon" slot-scope="props">
          <i class="iconfont icon-wode"></i>
        </div>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import Cookies from 'js-cookie'
  export default {
    name: 'app',
    data() {
      return {
        active: 0,
        transitionName: 'slide-left'
      }
    },
    watch: {
      $route: {
        handler(val) {
          let urlmark = val.path
          switch (urlmark) {
            case '/home':
              this.active = 0
              break
            case '/':
              this.active = 0
              break
            case '/index':
              this.active = 0
              break
            case '/love':
              this.active = 1
              break
            case '/find':
              this.active = 2
              break
            case '/user':
              this.active = 3
              break
          }
          Cookies.set('active', {
            active: this.active
          })
        }
      },
      'active': {
        handler(v, o) {
          if (o > v) {
            this.transitionName = 'slide-right'
          } else {
            this.transitionName = 'slide-left'
          }
        }
      }
    },
    created() {
      if (Cookies.getJSON('active')) {
        this.active = Cookies.getJSON('active').active
      }
      this.$api.GET_CATEGORY_LIST({page: 1, limit: 20, level: 2}).then(res => {
        if (res.code === 0) {
          this.$store.dispatch('getCategoryList', res.page.list)
        }
      })
    },
    methods: {
      onClickLeft() {
        this.$toast('返回')
      },
      onClickRight() {
        this.$toast('按钮')
      }
    },
    mounted() {}
  }
</script>

<style lang="less">
  .slide-left-enter {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }
  
  .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }
  
  .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(0, 0);
    transform: translate(0 0);
  }
  .slide-left-leave-active {
    opacity: 0;
    -webkit-transform: translate(0, 0);
    transform: translate(0 0);
  }
</style>