<template>
  <div class="index page">
    <van-nav-bar ref="header" class="header shadow" fixed @click-left="onClickLeft">
      <!-- <div slot="left" class="header-left">
        <i class="iconfont icon-weibiaoti35"></i> 全部公司
      </div> -->
      <div slot="title">
      </div>
      <div slot="right">
        <span class="right-item" @click="search">
            <i class="iconfont icon-sousuo"></i>
          </span>
        <!-- <span class="right-item" @click="setting">
            <i class="iconfont icon-caidan-2"></i>
          </span> -->
      </div>
    </van-nav-bar>
    <div class="new-wrap">
      <div class="wrapper">
        <cube-scroll @pulling-down="onPullingDown" @pulling-up="onPullUp" :listenScroll="true" @scroll="scroll" :options="options" :data="articleList" ref="scroll">
          <!--  <div slot="pulldown" slot-scope="props">
                    <div v-if="props.pullDownRefresh" class="cube-pulldown-wrapper" :style="props.pullDownStyle">
                      <div v-if="props.beforePullDown" class="before-trigger" :style="{paddingTop: props.bubbleY + 'px'}">
                        <div>
                           <p class="_copyright">群思科技提供技术支持</p>
                          <div v-show="props.bubbleY<70"><i class="iconfont icon-xialashuaxin" ></i>下拉刷新</div>
                          <div  v-show="props.bubbleY>70"><i class="iconfont icon-xialashuaxin1"></i>松开加载</div>
                          
                          
                        </div>
                      </div>
                      <div class="after-trigger" v-else>
                        <div v-if="props.isPullingDown" class="loading">
                          <cube-loading></cube-loading>
                        </div>
                        <div v-else><span class="refesh_success">刷新成功</span></div>
                      </div>
                    </div>
                  </div> -->
          <!-- <div slot="pulldown">下拉刷新</div> -->
          <div class="content" slot="default">
            <!-- <van-row class="grid-tit">
              <swiper :options="swiperOption" class="swiper _swiper">
                <swiper-slide v-for="(v,k) in category_2" :key="k" @click.native="goList(v)">
                  <p class="textover1 pdd">{{v.name}}</p>
                </swiper-slide>
              </swiper>
            </van-row> -->
            <p class="no-data" v-show="articleList.length==0">暂无数据...</p>
            <article-top :data="articleList" @to-detail="toDetail"></article-top>
          </div>
        </cube-scroll>
      </div>
    </div>
    <van-popup class="setting" v-model="show" position="left" style="height:100%;width:70%">
      <div class="setting-footer">
        <div class="skin-switch" @click="skinSwitch">
          <span v-show="night"><i class="iconfont icon-yejianmoshi"></i>夜间模式</span>
          <span v-show="!night"><i class="iconfont icon-rijianmoshi"></i>日间模式</span>
        </div>
        <div class="logout">
          <i class="iconfont icon-tuichu"></i>退出
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import $ from 'n-zepto'
  import ArticleTop from './Article-top.vue'
  import Refresh from '../components/loading/refresh.vue'
  export default {
    name: 'app',
    data() {
      return {
        show: false,
        night: true,
        swHeight: 0,
        num: 20,
        gridList: [],
        swiperOption: {
          slidesPerView: 4,
          spaceBetween: 20,
          freeMode: true
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
        },
        scrollY: 0,
        timer: null,
        articleList: [],
        stop: false,
        params: {
          page: 1,
          limit: 10
        }
      }
    },
    components: {
      ArticleTop,
      Refresh
    },
    computed: {
      department() {
        return this.$store.state.user.department
      },
      category_2() {
        return this.$store.state.user.category_1
      }
    },
    methods: {
      onPullingDown() {
        // console.log('下拉刷新了')
        this.getData({
          page: 1,
          limit: 10
        })
      },
      onPullUp() {
        // console.log('上拉加载了')
        if (!this.stop) {
          this.params.page++
        }
        this.getData(this.params)
      },
      onClickLeft() {
        this.$router.push('/company')
      },
      scroll(v) {
        let currentY = v.y
        this.timer = setTimeout(() => {
          if (currentY < -50) { // 还是解决ios下的怪异问题
            if (Math.abs(currentY) > Math.abs(this.scrollY)) {
              $('#app').addClass('toggle')
              // console.log('向下')
            } else {
              // console.log('向上')
              $('#app').removeClass('toggle')
            }
          }
          this.scrollY = currentY
        }, 1000 / 60)
      },
      goList(v) {
        this.$store.dispatch('setListParams', v)
        this.$router.push({
          name: 'List',
          params: {
            __v: v
          }
        })
      },
      skinSwitch() {
        let oApp = $('#app')
        if (oApp.hasClass('light')) {
          this.night = false
          oApp.removeClass('light')
          oApp.addClass('dark')
        } else {
          this.night = true
          oApp.removeClass('dark')
          oApp.addClass('light')
        }
      },
      toDetail(i, event) {
        this.$router.push({
          name: 'Detail',
          params: {
            info: i
          }
        })
      },
      search() {
        this.$router.push('/find')
      },
      setting() {
        this.show = true
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
                this.$refs.scroll.forceUpdate()
              } else {
                this.stop = false
                this.articleList = this.articleList.concat(res.page.list)
              }
            }
          } else {}
        })
      }
    },
    created() {
      this.getData({
        page: 1,
        limit: 10
      })
    },
    mounted() {
      this.$nextTick(() => {})
    }
  }
</script>

<style scoped lang="less">
  @import '../assets/mixin.less';
  .spinner {
    height: 40px;
  }
  
  .wrapper {
    height: 100vh;
    padding-top: 44px;
    padding-bottom: 0px;
    box-sizing: border-box;
  }
  .header {
    z-index: 9;
    transform: translateZ(0px);
    .logo {
      filter: brightness(0.7);
      width: 100px;
      height: 26px;
      margin: 4px auto
    }
    .header-left {
      max-width: 200px;
      .textover1();
    }
    .right-item {
      height: 100%;
      width: 40px;
      display: inline-block;
    }
    .van-nav-bar__right {
      right: 0!important;
    }
  }
  .new-wrap {
    padding: 0;
    .new-tit {
      padding: 8px;
    }
  }
  .setting {
    font-size: 14px;
    .setting-footer {
      display: flex;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 12px;
      .b_t();
      .iconfont {
        padding: 0 6px;
        font-size: 14px;
      }
      .skin-switch {
        flex: 1;
        text-align: left;
      }
      .logout {
        flex: 1;
        text-align: right;
      }
    }
  }
 
</style>