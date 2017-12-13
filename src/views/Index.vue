<template>
  <div id="app" class="index">
    <van-nav-bar title="标题" ref="header" class="header" fixed leftText="返回"  leftArrow
                 @click-left="onClickLeft" @click-right="onClickRight">

      <div slot="right">
        <i class="iconfont icon-paixu"></i>
      </div>

    </van-nav-bar>
    <van-tabs sticky ref="tab" class="tab">
      <van-tab v-for="(index,k) in 8" :key="k" :title="'选项 ' + index">
        内容 {{ index }}
        <p v-for="(i,k) in 100" :key="k">我是首页</p>
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
//  import utils from '../utils'

  export default {
    name: 'app',
    methods: {
      onClickLeft() {
        this.$toast('返回')
      },
      onClickRight() {
        this.$toast('按钮')
      }
    },
    mounted() {
     /*  this.$nextTick(() => {
        let befotop = document.body.scrollTop
        window.onscroll = () => {
          let currTop = document.body.scrollTop
          var tab = this.$refs.tab.$el
          if (currTop - befotop > 0) {
            utils.removeClass(tab, 'up')
            utils.addClass(tab, 'down')
            console.log('x')
          } else {
            utils.removeClass(tab, 'down')
            utils.addClass(tab, 'up')
            console.log('|')
          }
          befotop = currTop
        }
      }) */
    }
  }
</script>

<style scoped lang="less">
  
.header{
  z-index: 99;
}
</style>