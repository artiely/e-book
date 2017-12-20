<template>
  <div class="index page">
    <van-nav-bar ref="header" class="header" fixed @click-left="onClickLeft" @click-right="onClickRight">
      <div slot="left">
        <i class="iconfont icon-fanhui"></i>
      </div>
      <div slot="title">系统
        <!-- <img :src="require('../assets/logo_eng_white.png')" alt=""> -->
      </div>
      <div slot="right">
        <i class="iconfont icon-sousuo"></i>
      </div>
    </van-nav-bar>
    <van-tabs sticky class="tab">
      <van-tab v-for="(index,k) in titleList" :key="k" :title="index">
        <div style="padding-top:40px">
          <article-item @click="toDetail"></article-item>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
  import ArticleItem from './Article-item.vue'
  export default {
    name: 'app',
    data() {
      return {
        value: ''
      }
    },
    components: {
      ArticleItem
    },
    computed: {
      titleList() {
        return this.$store.state.user.titleList
      }
    },
    created() {
      this.titles = this.titleList
    },
    methods: {
      onClickLeft() {
        this.$router.back()
      },
      onClickRight() {
        this.$router.push('/find')
      },
      onSearch() {},
      toDetail() {
        this.$router.push('/detail')
      }
    },
    mounted() {
      this.$nextTick(() => {})
    }
  }
</script>

<style scoped lang="less">

</style>