<template>
  <div class="index page">
    <van-nav-bar ref="header" class="header shadow" fixed @click-left="onClickLeft">
      <div slot="left" class="header-left">
        <i class="iconfont icon-weibiaoti35"></i> 全部公司
      </div>
      <div slot="title">
      </div>
      <div slot="right">
        <span class="right-item" @click="search">
                    <i class="iconfont icon-sousuo"></i>
                  </span>
        <span class="right-item" @click="setting">
                    <i class="iconfont icon-caidan-2"></i>
                  </span>
      </div>
    </van-nav-bar>
    <van-row style="padding-top:45px;" class="grid-tit">
      <swiper :options="swiperOption" class="swiper">
        <swiper-slide v-for="(v,k) in gridList" :key="k" @click.native="goList">
          <svg class="icon" aria-hidden="true">
                        <use :xlink:href="'#'+v.icon"></use>
                    </svg>
        <p>{{v.label}}</p>
        </swiper-slide>
      </swiper>
    </van-row>
    <div class="new-wrap">
      <!-- <div class="new-tit">最新</div> -->
      <article-top></article-top>
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
  import ArticleItem from './Article-item.vue'
  import ArticleTop from './Article-top.vue'
  export default {
    name: 'app',
    data() {
      return {
        show: false,
        night: true,
        gridList: [
          {
            label: '系统',
            icon: 'icon-yewuchaxun'
          },
          {
            label: '邮件',
            icon: 'icon-rizhi'
          },
          {
            label: '外设',
            icon: 'icon-tiaochaziliaoguanli'
          },
          {
            label: '软件',
            icon: 'icon-renlianduibi'
          },
          {
            label: '现场',
            icon: 'icon-kehuweizhixinxicaiji'
          },
          {
            label: '其他',
            icon: 'icon-gaofengxianmingdanchaxun'
          }
        ],
        swiperOption: {
          slidesPerView: 4.7,
          spaceBetween: 30,
          freeMode: true
        }
      }
    },
    components: {
      ArticleItem,
      ArticleTop
    },
    methods: {
      onClickLeft() {
        this.$router.push('/company')
      },
      goList() {
        this.$router.push('/list')
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
      toDetail() {
        this.$router.push('/detail')
      },
      search() {
        this.$router.push('/find')
      },
      setting() {
        this.show = true
      }
    },
    mounted() {
      this.$nextTick(() => {})
      console.log(this.$store)
    }
  }
</script>

<style scoped lang="less">
  @import '../assets/mixin.less';
  .swiper{
    padding: 14px 0;
    background: #eee;
  }
  .header {
    z-index: 1;
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
    padding: 10px;
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
  .grid-tit {
    text-align: center;
    .van-col.van-col-8 {
      padding: 8px 0;
      box-sizing: border-box;
    }
    .icon {
      font-size: 35px;
    }
    p {
      font-size: 14px;
      margin: 0;
    }
  }
</style>