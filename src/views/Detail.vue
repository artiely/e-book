<template>
  <div class="index page">
    <div class="sticker">
      <div class="stickerCon">
        <van-nav-bar @click-right="onClickRight" @click-left="onClickLeft" fixed class="shadow">
          <div slot="left">
            <i class="iconfont icon-X"></i>
          </div>
          <div slot="title" class="textover1 title-over" :class="{'fade':showTitle}">
            <span class="tit-top" >能够动态改变结构树能够动态改变结构树</span>
          </div>
          <div slot="right">
            <i class="iconfont icon-jia1"></i>
          </div>
        </van-nav-bar>
        <div class="detail" :class="fontClass">
          <h3 class="detail-title">能够动态改变结构树</h3>
          <div class="info clearfix"> 
            <div class="author">谭杰</div> 
            <div class="time">07/12/20</div>
          </div>
          <p>能够动态改变结构树，增、删、隐藏、展示。 问题 添加事件，添加的对象是动态的，如何动态绑定 结构是无限的，需要怎么实现。 解决思路 vue子父组件间的传值实际是同一块内存地址，因此在子组件内，是可以改变父组件的值（虽然官方并不提倡这种双向数据流）,父组件a.b对象通过props传个子组件，子组件对b对象进行修改，父组件的a.b对象也会改变 可以使用递归的思想，当传入的对象，有子属性的时候，可以继续递归使用自身（需要声明name属性） 代码片段 父组件 import item from
            './cccc.vue' 来源：掘金 著作权归作者所有。<span class="__clock__">商业转载</span>请联系作者获得授权，非商业转载请注明出处。</p>
          <p>能够动态改变结构树，增、删、隐藏、展示。 问题 添加事件，添加的对象是动态的，如何动态绑定 结构是无限的，需要怎么实现。 解决思路 vue子父组件间的传值实际是同一块内存地址，因此在子组件内，是可以改变父组件的值（虽然官方并不提倡这种双向数据流）,父组件a.b对象通过props传个子组件，子组件对b对象进行修改，父组件的a.b对象也会改变 可以使用递归的思想，当传入的对象，有子属性的时候，可以继续递归使用自身（需要声明name属性） 代码片段 父组件 import item from
            './cccc.vue' 来源：掘金 著作权归作者所有。<span class="__clock__">商业转载</span>请联系作者获得授权，非商业转载请注明出处。</p>
          <p>用户名：<span class="__clock__">123</span></p>
          <p>密 码：<span class="__clock__">456789</span></p>
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
        defaultFontSize: {
          value: 14,
          label: '默认字体'
        },
        showTitle: false,
        fontClass: 'f14',
        fontSize: [
          {
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
      console.log(this.checkFontSize)
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
      }
    },
    mounted() {
      this.$nextTick(() => {
        $('.__clock__').html('<span class="__has-clock__">加密文本内容</span>')
        let offsetTop = $('.detail-title').offset().top
        $(window).on('scroll', () => {
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          setTimeout(() => {
            if (scrollTop > offsetTop) {
              this.showTitle = true
            } else {
              this.showTitle = false
            }
          }, 1000 / 60)
        })
      })
    }
  }
</script>

<style scoped lang="less">
  @import '../assets/mixin.less';
  .detail {
    padding: 50px 10px 20px 10px;
    .detail-title{
      padding: 20px 0 4px 0;
    }
    .info{
      color: #999;
      padding: 6px 0 2px 0;
      .time{
        font-size: 10px;
      }
    }
  }
  .title-over{
    margin-left:40px;
    margin-right:40px; 
    text-align: center;
    opacity: 0;
    font-size: 14px;
  }
  .fade{
    opacity: 1;
    transition:all .6s;
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
      color: #f00
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
    font-size: 12px !important
  }
  .f14 {
    font-size: 14px !important
  }
  .f16 {
    font-size: 16px !important
  }
  .f18 {
    font-size: 18px !important
  }
</style>