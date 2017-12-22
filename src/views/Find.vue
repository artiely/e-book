<template>
  <div class="index page">
    <van-nav-bar ref="header" class="header"  fixed @click-left="onClickLeft">
      <div slot="left" class="header-left">
        <i class="iconfont icon-fanhui"></i>
      </div>
      <div slot="title">
      </div>
      <div slot="right" @click="goCompany">
        <i class="iconfont  icon-weibiaoti35"></i>全部公司
      </div>
    </van-nav-bar>
    <van-search style="position:fixed;top:44px;left:0;right:0" v-model="value" placeholder="请输入关键词" :showAction="true" @search="onSearch">
    </van-search>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data() {
      return {
        value: ''
      }
    },
    computed: {},
    created() {
      this.titles = this.titleList
    },
    methods: {
      onClickRight() {
        this.$router.go(-1)
      },
      onClickLeft() {
        this.$router.back()
      },
      onSearch() {},
      goCompany() {
        this.$router.push('/company')
      }
    },
    mounted() {
      this.$nextTick(() => {})
    }
  }
</script>

<style scoped lang="less">

</style>