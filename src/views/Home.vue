<template>
  <div ref="app" class="app page">
    <!--<van-nav-bar title="标题" fixed leftText="返回" rightText="按钮" leftArrow @click-left="onClickLeft" @click-right="onClickRight" />-->
    <router-view class="RouterView"></router-view>
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
  import $ from 'n-zepto'
  import Cookies from 'js-cookie'
  export default {
    name: 'app',
    data() {
      return {
        active: 0
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
      }
    },
    created() {
      if (Cookies.getJSON('active')) {
        this.active = Cookies.getJSON('active').active
      }
    },
    methods: {
      onClickLeft() {
        this.$toast('返回')
      },
      onClickRight() {
        this.$toast('按钮')
      }
    },
    mounted() {
      this.$nextTick(() => {
        let befotop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        var timer = null
        window.onscroll = () => {
          clearTimeout(timer)
          let currTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          timer = setTimeout(() => {
            if (befotop > 50) { // 兼容ios到顶 navbar会隐藏的问题
              if (currTop - befotop > 0) {
                $('#app').addClass('toggle')
              } else {
                $('#app').removeClass('toggle')
              }
            }
            befotop = currTop
          }, 1000 / 60)
        }
      })
    }
  }
</script>

<style lang="less">
  .footer {
    transition: .2s;
  }
  .toggle {
    .footer {
      transition: .2s;
      bottom: -50px
    }
  }
  .van-hairline--top-bottom::after {
    border: none
  }
</style>