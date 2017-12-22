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
        <div style="padding-top:60px">
          <van-row gutter="10">
          <van-col v-for="(v,k) in category" :key="k" span="8">
            <div class="category textover1">{{v}}</div>
          </van-col>
        </van-row>
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
      },
      category() {
        return this.$store.state.user.category
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
.category{
  padding: 10px 0;
  text-align: center;
  background: #fff;
  border-radius: 4px;
  margin:6px 0;
  box-shadow: 1px 3px 6px rgba(227, 247, 234, 0.5);
  font-size: 14px;
}
</style>