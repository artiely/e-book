<template>
  <div class="index page">
    <div class="sticker">
      <div class="stickerCon">
        <van-nav-bar @click-right="onClickRight" @click-left="onClickLeft" fixed class="shadow">
          <div slot="left">
            <i class="iconfont icon-X"></i>
          </div>
          <div slot="title" class="textover1 title-over" :class="{'fade':showTitle}">
            <span class="tit-top">{{info.title}}</span>
          </div>
          <div slot="right">
            <i class="iconfont icon-jia1"></i>
          </div>
        </van-nav-bar>
        <div class="wrapper">
          <!-- <cube-scroll> -->
          <div class="detail" :class="fontClass">
            <!-- <iframe v-show="isIframe" src="src/views/detail.html" width='100%' height='100%' frameborder="0" class="iframe"
             id="iframepage" iframeborder="0" scrolling="yes" marginheight="0" marginwidth="0" 
            ></iframe> -->
            <div v-show="!isIframe" style="padding:18px;">
              <h3 class="detail-title">{{info.title}}</h3>
              <div class="info clearfix">
                <div class="author">创建者：{{info.createByUserName}}</div>
                <div class="time">发表时间：{{info.createDate}}</div>
                <div>关键词：<span v-for="it in info.keywordList" :key='it.id' style="font-size:12px;margin-right:4px;">{{it.text}}</span></div>
              </div>
              <div v-html="info.content"></div>
            </div>
          </div>
          <!-- </cube-scroll> -->
        </div>
      </div>
    </div>
    <div class="sfooter">@Artiely</div>
    <van-popup v-model="show" style="width:100%;height:50%;" position="top">
      <van-nav-bar title="设置" @click-right="falseToShow" fixed>
        <div slot="right">
          <i class="iconfont icon-X"></i>
        </div>
      </van-nav-bar>
      <div style="padding-top:50px">
        <label class="font-item" :class="checkFontSize.value==v.value?'active':''" v-for="(v,k) in fontSize" :key="k">
            <input type="radio" v-model="defaultFontSize" :value="v" name="font"/>{{v.label}}
            <i class="iconfont icon-mini-dui" v-show="checkFontSize.value==v.value"></i>
          </label>
          <!-- <div @click="changeShow">切换预览方式</div> -->
      </div>
    </van-popup>
  </div>
</template>

<script>
import $ from 'n-zepto'
export default {
  name: 'app',
  data() {
    return {
      show: false,
      info: {},
      isIframe: false,
      defaultFontSize: {
        value: 14,
        label: '默认字体'
      },
      showTitle: false,
      fontClass: 'f14',
      fontSize: [{
        value: 12,
        label: '小号字体'
      },
      {
        value: 14,
        label: '默认字体'
      },
      {
        value: 16,
        label: '中号字体'
      },
      {
        value: 18,
        label: '大号字体'
      }
      ]
    }
  },
  computed: {
    checkFontSize() {
      return this.$store.state.user.checkFontSize
    }
  },
  watch: {
    defaultFontSize: {
      handler(val) {
        if (val.value === 12) {
          this.fontClass = 'f12'
        } else if (val.value === 14) {
          this.fontClass = 'f14'
        } else if (val.value === 16) {
          this.fontClass = 'f16'
        } else {
          this.fontClass = 'f18'
        }
        this.$store.dispatch('setFontSize', val)
      }
    }
  },
  created() {
    this.defaultFontSize = this.checkFontSize
  },
  methods: {
    onClickRight() {
      this.show = true
    },
    onClickLeft() {
      this.$router.back()
    },
    falseToShow() {
      this.show = false
    },
    changeShow() {
      this.isIframe = !this.isIframe
    }
  },
  mounted() {
    this.$nextTick(() => {
      let offsetTop = $('.detail-title').offset().top
      $('.wrapper').on('scroll', () => {
        let scrollTop = $('.wrapper')[0].scrollTop
        setTimeout(() => {
          if (scrollTop > offsetTop) {
            this.showTitle = true
          } else {
            this.showTitle = false
          }
        }, 1000 / 60)
      })
    })
  },
  activated() {
    this.info = this.$route.params.info
    this.$nextTick(function() {
      if ($('.__lock__').eq(0).text() !== '加密文本内容') {
        var locks = $('.__lock__')
        for (var j = 0; j < locks.length; j++) {
          locks[j].replaceWith(locks[j].innerText)
        }
      }
    })
  }
}
</script>

<style scoped lang="less">
@import "../assets/mixin.less";
.iframe {
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
}
.wrapper {
  height: 100vh;
  overflow-y: scroll;
  overflow-x: auto;
  // padding: 6px;
  background: #fff;
  box-sizing: border-box;
}
.detail {
  padding-top: 50px;
  // padding: 50px 10px 20px 10px;
  .detail-title {
    padding: 20px 0 4px 0;
  }
  .info {
    color: #999;
    padding: 6px 0 2px 0;
    .time {
      font-size: 10px;
    }
  }
}
.title-over {
  margin-left: 40px;
  margin-right: 40px;
  text-align: center;
  opacity: 0;
  font-size: 14px;
}
.fade {
  opacity: 1;
  transition: all 0.6s;
}
.icon-X {
  opacity: 0.7;
}
.font-item {
  display: block;
  text-align: left;
  padding: 8px;
  color: #777;
  &.active {
    color: #f00;
  }
  .b_b();
  .iconfont {
    float: right;
    margin-top: 4px;
    margin-right: 4px;
  }
  input {
    visibility: hidden;
  }
}
.f12 {
  font-size: 12px !important;
}
.f14 {
  font-size: 14px !important;
}
.f16 {
  font-size: 16px !important;
}
.f18 {
  font-size: 18px !important;
}
</style>
