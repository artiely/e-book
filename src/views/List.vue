<template>
  <div class="index page">
    <van-nav-bar ref="header" class="header shadow" fixed @click-left="onClickLeft" @click-right="onClickRight">
      <div slot="left">
        <i class="iconfont icon-fanhui"></i>
      </div>
      <div slot="title">{{listParams.name}}
        <!-- <img :src="require('../assets/logo_eng_white.png')" alt=""> -->
      </div>
      <div slot="right">
        <i class="iconfont icon-sousuo"></i>
      </div>
    </van-nav-bar>
    <div>
      <div class="wrapper">
        <cube-scroll>
          <van-row class="grid-tit">
            <swiper :options="swiperOption" class="swiper">
              <swiper-slide :class="{'active':choice.id == ''}"  @click.native="getList({id:''})">
                <!-- <svg class="icon" aria-hidden="true">
                        <use :xlink:href="'#'+v.icon"></use>
                    </svg> -->
                <p class="textover1">全部</p>
              </swiper-slide>
              <swiper-slide :class="{'active':v.id == choice.id}" v-for="(v,k) in category_3" :key="k" @click.native="getList(v)">
                <!-- <svg class="icon" aria-hidden="true">
                        <use :xlink:href="'#'+v.icon"></use>
                    </svg> -->
                <p class="textover1">{{v.name}}</p>
              </swiper-slide>
            </swiper>
          </van-row>
          <article-top :data="articleList" @to-detail="toDetail"></article-top>
        </cube-scroll>
      </div>
    </div>
  </div>
</template>
<script>
  import ArticleTop from './Article-top.vue'
  export default {
    name: 'app',
    data() {
      return {
        value: '',
        swiperOption: {
          slidesPerView: 4,
          spaceBetween: 30,
          freeMode: true
        },
        articleList: [],
        choice:{
          id:''
        }
      }
    },
    components: {
      ArticleTop
    },
    computed: {
      titleList() {
        return this.$store.state.user.titleList
      },
      category_3() {
        return this.$store.state.user.category_3
      },
      listParams() {
        return this.$store.state.user.listParams
      }
    },
    created() {
      
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
      },
      getList(v) {
        this.choice = v
        this.$api.GET_ARTICLE_LIST({
          page: 1,
          limit: 10,
          category_id2: this.listParams.id,
          category_id3: v.id
        }).then(res => {
          if (res.code === 0) {
            this.articleList = res.page.list
          }
        })
      }
    },
    mounted() {
      this.$nextTick(() => {})
    },
    activated() {
      this.$api.GET_ARTICLE_LIST({
        page: 1,
        limit: 10,
        category_id2: this.listParams.id,
        category_id3: this.choice.id
      }).then(res => {
        if (res.code === 0) {
          this.articleList = res.page.list
        }
      })
    }
  }
</script>

<style scoped lang="less">
.active{
  color: #2dabd1
}
  .wrapper {
    height: 100vh;
    padding-top: 44px;
  }
</style>