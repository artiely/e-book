<template>
  <div class="index page">
    <div class="sticker">
      <div class="stickerCon">
        <van-nav-bar title="详情" @click-right="onClickRight" @click-left="onClickLeft" fixed>
          <div slot="left">
            <i class="iconfont icon-fanhui"></i>
          </div>
          <div slot="right">
            <i class="iconfont icon-jia"></i>
          </div>
        </van-nav-bar>
        <div class="detail" :class="fontClass">
          能够动态改变结构树，增、删、隐藏、展示。 问题 添加事件，添加的对象是动态的，如何动态绑定 结构是无限的，需要怎么实现。 解决思路 vue子父组件间的传值实际是同一块内存地址，因此在子组件内，是可以改变父组件的值（虽然官方并不提倡这种双向数据流）,父组件a.b对象通过props传个子组件，子组件对b对象进行修改，父组件的a.b对象也会改变 可以使用递归的思想，当传入的对象，有子属性的时候，可以继续递归使用自身（需要声明name属性） 代码片段 父组件 import item from './cccc.vue'
          来源：掘金 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
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
  export default {
    name: 'app',
    data() {
      return {
        show: false,
        defaultFontSize: {
          value: 14,
          label: '默认字体'
        },
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
      this.$nextTick(() => {})
    }
  }
</script>

<style scoped lang="less">
  @import '../assets/mixin.less';
  .detail {
    padding-top: 50px;
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