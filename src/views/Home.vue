<template>
  <div id="app" ref="app" class="app">
    <!--<van-nav-bar title="标题" fixed leftText="返回" rightText="按钮" leftArrow @click-left="onClickLeft" @click-right="onClickRight" />-->
    <router-view></router-view>
    <van-tabbar v-model="active" class="footer" ref="footer">
      <van-tabbar-item icon="shop">标签</van-tabbar-item>
      <van-tabbar-item icon="chat" dot>标签</van-tabbar-item>
      <van-tabbar-item icon="records" info="5">标签</van-tabbar-item>
      <van-tabbar-item icon="gold-coin" info="20">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  //  import utils from '../utils'
  //  console.log(utils)
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
        // let app = this.$refs.app.$el
        // console.log('app', app)
        window.onscroll = () => {
          let currTop = document.body.scrollTop
          if (currTop - befotop > 0) {
            // utils.addClass(app, 'toggle')
            $('#app').addClass('toggle')
            console.log('1')
          } else {
            $('#app').removeClass('toggle')
            console.log('2')
            // utils.removeClass(app, 'toggle')
          }
          befotop = currTop
        }
      })
    }
  }
</script>

<style lang="less">
  .footer {
    transition: .2s;
  }
  .van-tabs__wrap {
    top: 45px;
    transition: .2s;
  }
  .toggle {
    .footer {
      transition: .2s;
      bottom: -45px
    }
    .van-tabs__wrap {
      top: 0
    }
  }
</style>