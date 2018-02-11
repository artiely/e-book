<template>
  <div class="index page">
    <van-nav-bar ref="header" class="header shadow" fixed @click-left="onClickLeft" @click-right="onClickRight">
      <div slot="left">
        <i class="iconfont icon-fanhui"></i>
      </div>
      <div slot="title">{{listParams.name}}
        <!-- <img :src="require('../assets/logo_eng_white.png')" alt=""> -->
      </div>
      <div slot="right">
        <i class="iconfont icon-sousuo"></i>
      </div>
    </van-nav-bar>
    <div>
      <div class="wrapper">
        <cube-scroll @pulling-down="onPullingDown" @pulling-up="onPullUp" :options="options" :data="articleList" ref="scroll">
          <van-row class="grid-tit">
            <swiper :options="swiperOption" class="swiper _swiper">
              <swiper-slide :class="{'active':choice.id == ''}" @click.native="setChoice({id:''})">
                <!-- <svg class="icon" aria-hidden="true">
                                <use :xlink:href="'#'+v.icon"></use>
                            </svg> -->
                <p class="textover1 pdd">全部</p>
              </swiper-slide>
              <swiper-slide :class="{'active':v.id == choice.id}" v-for="(v,k) in category_3" :key="k" @click.native="setChoice(v)">
                <!-- <svg class="icon" aria-hidden="true">
                                <use :xlink:href="'#'+v.icon"></use>
                            </svg> -->
                <p class="textover1 pdd">{{v.name}}</p>
              </swiper-slide>
            </swiper>
          </van-row>
          <p class="no-data" v-show="articleList.length==0">暂无数据...</p>
          <article-top :data="articleList" @to-detail="toDetail"></article-top>
        </cube-scroll>
      </div>
    </div>
  </div>
</template>
<script>
  import ArticleTop from './Article-top.vue'
  export default {
    name: 'app',
    data() {
      return {
        value: '',
        swiperOption: {
          slidesPerView: 4,
          spaceBetween: 30,
          freeMode: true
        },
        articleList: [],
        choice: {
          id: ''
        },
        options: {
          probeType: 1,
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
        }
      }
    },
    components: {
      ArticleTop
    },
    watch: {
      choice: {
        handler() {
          this.params.page = 1
          this.getData()
        }
      }
    },
    computed: {
      titleList() {
        return this.$store.state.user.titleList
      },
      category_3() {
        return this.$store.state.user.category_2
      },
      listParams() {
        return this.$store.state.user.listParams
      },
      params() {
        return {
          page: 1,
          limit: 10,
          categoryId1: this.listParams.id,
          categoryId2: this.choice.id
        }
      }
    },
    created() {},
    methods: {
      setChoice(v) {
        this.choice = v
      },
      onPullingDown() {
        // console.log('下拉刷新了')
        this.params.page = 1
        this.getData(this.params)
      },
      onPullUp() {
        // console.log('上拉加载了')
        this.getData(this.params)
      },
      onClickLeft() {
        this.$router.back()
      },
      onClickRight() {
        this.$router.push('/find')
      },
      onSearch() {},
      toDetail(i, event) {
        this.$router.push({
          name: 'Detail',
          params: {
            info: i
          }
        })
      },
      getData() {
        this.$api.GET_ARTICLE_LIST(this.params).then(res => {
          if (res.code === 0) {
            if (this.params.page === 1) {
              this.params.page++
              this.articleList = res.page.list
            } else {
              if (res.page.list.length === 0) {
                // 如果没有新数据
                this.$refs.scroll.forceUpdate()
              } else {
                this.params.page++
                this.articleList = this.articleList.concat(res.page.list)
              }
            }
          }
        })
      }
    },
    mounted() {
      this.$nextTick(() => {})
    },
    activated() {
      this.params.page = 1
      this.getData(this.params)
    }
  }
</script>

<style scoped lang="less">
  .active {
    color: #2dabd1
  }
  .wrapper {
    height: 100vh;
    padding-top: 44px;
    box-sizing: border-box;
  }
</style>