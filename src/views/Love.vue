<template>
  <div class="index page">
    <van-nav-bar ref="header" class="header" fixed @click-left="onClickLeft" @click-right="onClickRight">
      <div slot="left">
        <i class="iconfont icon-fanhui"></i>
      </div>
      <div slot="title">
      </div>
      <div slot="right">
        <i class="iconfont icon-paixu"></i>
      </div>
    </van-nav-bar>
    <van-tabs sticky class="tab">
      <van-tab v-for="(index,k) in department" :key="k" :title="index">
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
        titles: []
      }
    },
    components: {
      ArticleItem
    },
    computed: {
      department() {
        return this.$store.state.user.department
      }
    },
    created() {},
    methods: {
      onClickRight() {
        this.$router.push('/sort')
      },
      onClickLeft() {
        this.$router.back()
      },
      toDetail() {
        this.$router.push('/detail')
      }
    },
    mounted() {}
  }
</script>

<style scoped lang="less">

</style>