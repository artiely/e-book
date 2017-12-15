<template>
  <div ref="app" class="app page">
    <!--<van-nav-bar title="标题" fixed leftText="返回" rightText="按钮" leftArrow @click-left="onClickLeft" @click-right="onClickRight" />-->
    <router-view></router-view>
    <van-tabbar v-model="active" class="footer" ref="footer">
      <van-tabbar-item icon="shop" to="index">
        <span>头条</span>
        <template slot="icon" slot-scope="props">
        <i class="iconfont icon-toutiao"></i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="chat" dot to="love">
        <span>专栏</span>
        <template slot="icon" slot-scope="props">
        <i class="iconfont icon-zhuanlan_jiemu"></i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="records" info="5" to="find">
        <span>发现</span>
        <template slot="icon" slot-scope="props">
        <i class="iconfont icon-faxian"></i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="gold-coin" info="20" to="user">
        <span>我的</span>
        <template slot="icon" slot-scope="props">
        <i class="iconfont icon-wode"></i>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import $ from 'n-zepto'
  export default {
    name: 'app',
    data() {
      return {
        active: 0
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
        let befotop = document.body.scrollTop
        var timer = null
        window.onscroll = () => {
          clearTimeout(timer)
          let currTop = document.body.scrollTop
          timer = setTimeout(() => {
            if (currTop - befotop > 0) {
              $('#app').addClass('toggle')
              console.log('1')
            } else {
              $('#app').removeClass('toggle')
              console.log('2')
            }
            befotop = currTop
          }, 30)
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