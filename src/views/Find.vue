<template>
  <div class="index page">
    <!-- <van-nav-bar ref="header" class="header shadow" fixed >
      <div slot="right" class="header-left" @click="actionshow=true">
        <i class="iconfont icon-tuichu"></i>
      </div>
      <div slot="title">
      </div>
    </van-nav-bar> -->
    <div class="wrapper" style="padding-top:0">
      <cube-scroll :data="articleList"  @pulling-down="onPullingDown" @pulling-up="onPullUp" :listenScroll="true" @scroll="scroll" :options="options"  ref="scroll">
        <van-cell-group>
          <van-cell title="公司" is-link :value="companyNameString" @click.native="companyShow"/>
          <van-cell v-show="company.id" title="类目" is-link :value="choice_category.text" @click.native="filter2"/>
          <van-cell title="关键词" is-link :value="keywordsResult.length>0 ? keywordsResult.length + '个关键词':'点击选择'"  @click.native="showSearch"/>
        </van-cell-group>
        <p v-if="(params.companyId==''&&params.categoryId1==''&&params.keywordIds.length==0)&&articleList.length==0" style="text-align:center;color:#888;padding:9px;font-size:14px;">选择公司、类目或关键词搜索文章</p>
        <p v-else-if="articleList.length==0" style="text-align:center;color:#888;padding:9px;font-size:14px;">暂无匹配数据...</p>
       
        <article-top :data="articleList" @to-detail="toDetail"></article-top>
      </cube-scroll>
    </div>
    <van-popup v-model="show" style="height:80%;width:100%" position="bottom">
      <van-picker :visible-item-count="8" :columns="companyList" @change="onChange" show-toolbar title="选择公司" @cancel="onCancel" @confirm="onConfirm" />
    </van-popup>
    <van-popup v-model="show2" style="height:80%;width:100%" position="bottom">
      <van-picker :visible-item-count="8" :columns="category_1" @change="onChange2" show-toolbar  @cancel="onCancel2" @confirm="onConfirm2" />
    </van-popup>
     <van-popup v-model="companyVisiable" style="height:100%;width:80%" position="right">
      <van-search style="position:absolute;top:0px;left:0;right:0" v-model="companyShortName" placeholder="请输入公司简称" >
      </van-search>
      <div class="wrapper-search">
          <!-- <p style="font-size:12px;padding-left:8px;color:#777">选择关键词进行搜索</p> -->
          <van-radio-group v-model="company.id"> 
            <van-cell-group>
              <van-cell v-for="(v, index) in companyList" :key="index">
                <van-radio shape="square" :name="v.id">{{ v.text }}</van-radio>
              </van-cell>
            </van-cell-group>
          </van-radio-group>
      </div>
    </van-popup>
    <van-popup v-model="show3" style="height:100%;width:80%" position="right">
      <van-search style="position:absolute;top:0px;left:0;right:0" v-model="value" placeholder="请输入关键词" >
         <!-- <div slot="action" @click="onClose">关闭</div> -->
      </van-search>
      <div class="wrapper-search">
        <!-- <cube-scroll :data="keywordList"> -->
          <p style="font-size:12px;padding-left:8px;color:#777">选择关键词进行搜索</p>
          <van-checkbox-group v-model="keywordsResult">
            <van-cell-group>
              <van-cell v-for="(v, index) in keywordList" :key="index">
                <van-checkbox shape="square" :name="v.id">{{ v.name }}</van-checkbox>
              </van-cell>
            </van-cell-group>
          </van-checkbox-group>
        <!-- </cube-scroll> -->
      </div>
    </van-popup>
    <van-actionsheet v-model="actionshow" :actions="actions" cancel-text="取消" />
  </div>
</template>
<script>
import Cookies from 'js-cookie'
import ArticleTop from './Article-top.vue'
export default {
  name: 'app',
  data() {
    return {
      actionshow: false,
      actions: [
        {
          name: '注销',
          callback: this.logout
        }
      ],
      value: '',
      companyVisiable: false,
      categoryVisiable: false,
      keywordVisiable: false,
      timer: null,
      show: false,
      show2: false,
      show3: false,
      keywordsResult: [],
      company: {
        text: '选择公司',
        id: '',
        categoryId: ''
      },
      companyTimer: null,
      companyShortName: '',
      companyNameString: '点击选择',
      articleList: [],
      category_1: [],
      category_2: [],
      choice_category: {
        text: '点击选择',
        id: '',
        categoryId: ''
      },
      keywordList: [],
      companyList: [],
      options: {
        probeType: 1,
        pullDownRefresh: {
          stop: 44,
          threshold: 70,
          txt: '刷新成功'
        },
        pullUpLoad: {
          threshold: -50,
          txt: {
            more: '上拉加载更多...',
            noMore: '———— 我就是底线 ————'
          }
        }
      }
    }
  },
  components: {
    ArticleTop
  },
  watch: {
    'params': {
      handler() {
        this.search()
      }
    },
    'value': {
      handler() {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this._getKeyword()
        }, 600)
      }
    },
    'company.id': {
      handler(val) {
        let companyname = this.companyList.filter(v => {
          if (val === v.id) {
            return v
          }
        })
        this.companyNameString = companyname[0].shortName
        this.getCategory_1()
      }
    },
    'companyShortName': {
      handler(val) {
        clearTimeout(this.companyTimer)
        setTimeout(() => {
          this.getCompany({ page: 1, limit: 100, sSearch: val })
        }, 600)
      }
    }
  },
  computed: {
    params() {
      // let _id = JSON.parse(this.company._string)
      return {
        page: 1,
        limit: 10,
        companyId: this.company.id,
        categoryId1: this.choice_category.categoryId,
        // categoryId1: this.company.categoryId,
        // categoryId2: this.choice_category.categoryId,
        keywordIds: this.keywordsResult
      }
    },
    params_category_2() {
      return {
        page: 0,
        limit: 1000,
        parentId: this.company.id
      }
    }
  },
  created() {
    this._init_c_2()
    this._getKeyword()
    this.getCompany()
    this.getData({
      page: 1,
      limit: 10
    })
  },
  methods: {
    logout() {
      Cookies.remove('__userInfo')
      this.$router.replace('/login')
      window.location.reload()
    },
    companyShow() {
      this.companyVisiable = true
    },
    categoryShow() {
      this.categoryVisiable = true
    },
    keywordShow() {
      this.keywordVisiable = true
    },
    onClose() {
      this.show3 = false
    },
    getCompany(data) {
      let _data = data || { page: 1, limit: 100 }
      this.$api.GET_COMPANY_LIST_BYUSER(_data).then(res => {
        if (res.code === 0) {
          let data = res.page.list.map(v => {
            v.text = v.companyname || '奇怪,没公司名'
            v.id = v.id || ''
            return v
          })
          data.unshift({
            text: '全部公司',
            shortName: '全部公司',
            id: ''
          })
          this.companyList = data
        }
      })
    },
    _init_c_2() {
      let data = this.$store.state.user.category_2.map(v => {
        v.text = v.name
        return v
      })
      data.unshift({
        text: '选择类目',
        id: ''
      })
      this.category_2 = data
    },
    _getKeyword() {
      this.$api.GET_KEYWORD_LIST({
        limit: 20,
        page: 1,
        name: this.value
      }).then(res => {
        if (res.code === 0) {
          this.keywordList = res.page.list.map(v => {
            v._string = JSON.stringify({ _id: v.id, _name: v.name })
            return v
          })
          console.log('----------', this.keywordList)
        }
      })
    },
    showSearch() {
      this.show3 = true
    },
    search() {
      this.$api.GET_ARTICLE_LIST(this.params).then(res => {
        if (res.code === 0) {
          this.articleList = res.page.list
        }
      })
    },
    toDetail(i, event) {
      this.$router.push({
        name: 'Detail',
        params: {
          info: i
        }
      })
    },
    filter() {
      this.show = true
    },
    filter2() {
      this.show2 = true
    },
    getCategory_1() {
      this.$api.GET_CATEGORY_TREE({ page: 0, limit: 1000, parentId: 0, companyId: this.company.id }).then(res => {
        if (res.code === 0) {
          let data = res.page.list.map(v => {
            v.text = v.categoryIdName
            return v
          })
          data.unshift({
            text: '全部类目',
            id: ''
          })
          this.category_1 = data
        }
      })
    },
    getCategory_2() {
      this.$api.GET_CATEGORY_TREE(this.params_category_2).then(res => {
        if (res.code === 0) {
          let data = res.page.list.map(v => {
            v.text = v.categoryIdName
            return v
          })
          data.unshift({
            text: '全部类目',
            id: ''
          })
          this.category_2 = data
        }
      })
    },
    onConfirm() {
      this.show = false
    },
    onCancel() {
      // this.company = this.category_1[0]
      this.show = false
    },
    onConfirm2() {
      this.show2 = false
    },
    onCancel2() {
      // this.choice_category = this.category_2[0]
      this.show2 = false
    },
    onChange(picker, values) {
      this.company = picker.getValues()[0]
      console.log('选择的公司', picker.getValues()[0])
    },
    onChange2(picker, values) {
      this.choice_category = picker.getValues()[0]
    },
    onClickRight() {
      this.$router.go(-1)
    },
    onClickLeft() {
      this.$router.back()
    },
    onSearch() { },
    goCompany() {
      this.$router.push('/company')
    },
    getData(params) {
      this.$api.GET_ARTICLE_LIST(params).then(res => {
        if (res.code === 0) {
          if (params.page === 1) {
            this.articleList = res.page.list
          } else {
            if (res.page.list.length === 0) {
              // 如果没有新数据
              this.stop = true
              this.$refs.scroll.forceUpdate()
            } else {
              this.stop = false
              this.articleList = this.articleList.concat(res.page.list)
            }
          }
        } else { }
      })
    },
    onPullingDown() {
      // console.log('下拉刷新了')
      this.getData({
        page: 1,
        limit: 10
      })
    },
    onPullUp() {
      // console.log('上拉加载了')
      if (!this.stop) {
        this.params.page++
      }
      this.getData(this.params)
    }
  },
  mounted() {
    this.$nextTick(() => { })
  }
}
</script>

<style scoped lang="less">
.wrapper {
  height: 100vh;
  padding-top: 45px;
  padding-bottom: 50px;
  box-sizing: border-box;
}
.wrapper-search {
  height: 100vh;
  padding-top: 44px;
  box-sizing: border-box;
  overflow-y: scroll;
}
.van-search {
  z-index: 9;
}
.right-item {
  padding: 0 8px;
}
</style>