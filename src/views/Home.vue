<template>
  <div ref="app" class="app page">
    <transition :name="transitionName" >
      <keep-alive>
      <router-view class="RouterView"></router-view>
      </keep-alive>
    </transition>
    <van-tabbar v-model="active" class="footer" ref="footer">
      <van-tabbar-item  to="index">
        <span>首页</span>
        <div slot="icon" slot-scope="props">
          <i class="iconfont icon-toutiao"></i>
        </div>
      </van-tabbar-item>
      <van-tabbar-item   to="find">
        <span>搜索</span>
        <div slot="icon" slot-scope="props">
          <i class="iconfont icon-faxian"></i>
        </div>
      </van-tabbar-item>
      <van-tabbar-item   to="user">
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
          case '/find':
            this.active = 1
            break
          case '/user':
            this.active = 2
            break
        }
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
    this.$store.dispatch('getCategoryList')
  },
  methods: {
    onClickLeft() {
      this.$toast('返回')
    },
    onClickRight() {
      this.$toast('按钮')
    },
    _selectPath() {
      let urlmark = this.$route.path
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
        case '/find':
          this.active = 1
          break
        case '/user':
          this.active = 2
          break
      }
    }
  },
  mounted() {
    this._selectPath()
  }
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