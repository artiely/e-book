<template>
  <div class="index page">
    <van-nav-bar ref="header" class="header love-h" fixed @click-left="onClickLeft" @click-right="onClickRight">
      <div slot="left">
        <i class="iconfont icon-fanhui"></i>
      </div>
      <div slot="title">
      </div>
      <div slot="right">
        <i class="iconfont icon-paixu"></i>
      </div>
    </van-nav-bar>
    <van-tabs class="tab">
      <van-tab v-for="(index,k) in department" :key="k" :title="index">
        <div style="margin-top:-44px;">
          <div class="wrapper">
            <cube-scroll :options="options" :listenScroll="true" @scroll="scroll">
              <div style="height:44px;"></div>
              <article-top @click="toDetail"></article-top>
              <div style="height:120px"></div>
            </cube-scroll>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
  import $ from 'n-zepto'
  import ArticleTop from './Article-top.vue'
  export default {
    name: 'app',
    data() {
      return {
        titles: [],
        options: {
          probeType: 2
        }
      }
    },
    components: {
      ArticleTop
    },
    computed: {
      department() {
        return this.$store.state.user.department
      }
    },
    created() {},
    methods: {
      scroll(v) {
        let currentY = v.y
        console.log('currentY', currentY, this.scrollY)
        this.timer = setTimeout(() => {
          if (currentY < -50) { // 还是解决ios下的怪异问题
            if (Math.abs(currentY) > Math.abs(this.scrollY)) {
              $('#app').addClass('toggle')
              $('.love-h').addClass('up')
              $('.tab').addClass('up')
              console.log('向下')
            } else {
              console.log('向上')
              $('#app').removeClass('toggle')
              $('.love-h').removeClass('up')
              $('.tab').removeClass('up')
            }
          }
          this.scrollY = currentY
        }, 1000 / 60)
      },
      onClickRight() {
        this.$router.push('/sort')
      },
      onClickLeft() {
        this.$router.back()
      },
      toDetail() {
        this.$router.push('/detail')
      }
    },
    mounted() {}
  }
</script>

<style scoped lang="less">
  .wrapper {
    overflow: hidden;
    position: absolute;
    top: 88px;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
  }
</style>