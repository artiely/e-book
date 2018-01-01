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
    <div>
      <div class="wrapper">
        <cube-scroll @pulling-down="onPullingDown" @pulling-up="onPullUp" :listenScroll="true" @scroll="scroll" :options="options" :data="articleList" ref="scroller">
          <van-row>
            <van-col v-for="(v,k) in department" :key="k" span="8">
              <div class="category textover1">{{v.name}}</div>
            </van-col>
          </van-row>
          <article-top @to-detail="toDetail" :data="articleList"></article-top>
        </cube-scroll>
      </div>
    </div>
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
          probeType: 2,
          pullDownRefresh: {
            stop: 44,
            threshold: 70,
            txt: '刷新成功'
          },
          pullUpLoad: {
            threshold: -50,
            txt: {
              more: '上拉加载更多...',
              noMore: '———— 我就是底线 ————'
            }
          }
        },
        articleList: [],
        stop: false,
        params: {
          page: 1,
          limit: 10
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
    created() {
      this.getData({
        page: 1,
        limit: 10
      })
    },
    methods: {
      onPullingDown() {
        console.log('下拉刷新了')
        this.getData({
          page: 1,
          limit: 10
        })
      },
      onPullUp() {
        console.log('上拉加载了')
        if (!this.stop) {
          this.params.page++
        }
        this.getData(this.params)
      },
      getData(params) {
        this.$api.GET_ARTICLE_LIST(params).then(res => {
          if (res.code === 0) {
            if (params.page === 1) {
              this.articleList = res.page.list
            } else {
              if (res.page.list.length === 0) {
                // 如果没有新数据
                this.stop = true
                this.$refs.scroller.forceUpdate()
              } else {
                this.stop = false
                this.articleList = this.articleList.concat(res.page.list)
              }
            }
          } else {}
        })
      },
      scroll(v) {
        let currentY = v.y
        console.log('currentY', currentY, this.scrollY)
        this.timer = setTimeout(() => {
          if (currentY < -50) { // 还是解决ios下的怪异问题
            if (Math.abs(currentY) > Math.abs(this.scrollY)) {
              $('#app').addClass('toggle')
              // $('.love-h').addClass('up')
              // $('.tab').addClass('up')
              // console.log('向下')
            } else {
              // console.log('向上')
              $('#app').removeClass('toggle')
              // $('.love-h').removeClass('up')
              // $('.tab').removeClass('up')
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
      toDetail(i, event) {
        this.$router.push({
          name: 'Detail',
          params: {
            info: i
          }
        })
      }
    },
    mounted() {}
  }
</script>

<style scoped lang="less">
  .wrapper {
    height: 100vh;
    padding-top: 44px;
    padding-bottom: 0;
    box-sizing: border-box
  }
</style>