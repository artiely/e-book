<template>
  <div class="index page">
    <van-nav-bar ref="header" class="header" fixed @click-left="onClickLeft" @click-right="onClickRight">
      <div slot="left">
        <i class="iconfont icon-book"></i>
      </div>
      <div slot="title">口袋书
        <!-- <img :src="require('../assets/logo_eng_white.png')" alt=""> -->
      </div>
      <div slot="right">
        <i class="iconfont icon-paixu"></i>
      </div>
    </van-nav-bar>
    <van-tabs sticky class="tab">
      <van-tab v-for="(index,k) in titleList" :key="k" :title="index">
        <div style="padding-top:40px">
          <div v-for="(i,k) in 100" :key="k" class="article" @click="toDetail">
            <h3 class="tit">{{i}}介绍一下渐进式web App</h3>
            <p class="des">每一条数据需要提供第一个select的options选项；后面的文本框需要输入类型；切换为区间输入的时候数据格式的切换，每条数据的唯一name属性。</p>
          </div>
        </div>
      </van-tab>
    </van-tabs>
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
  export default {
    name: 'app',
    data() {
      return {
        show: false,
        night: true
      }
    },
    computed: {
      titleList() {
        return this.$store.state.user.titleList
      }
    },
    methods: {
      onClickLeft() {
        this.show = true
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
      onClickRight() {
        this.$router.push('/sort')
      },
      toDetail() {
        this.$router.push('/detail')
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
  
  .header {
    z-index: 1;
    .logo {
      filter: brightness(0.7);
      width: 100px;
      height: 26px;
      margin: 4px auto
    }
  }
  .article {
    padding: 10px;
    .b_b();
    .tit {
      text-align: left;
      font-size: 14px;
      color: #333;
      margin: 0;
      .textover1();
    }
    .des {
      text-align: left;
      font-size: 12px;
      color: #777;
      .textover2();
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