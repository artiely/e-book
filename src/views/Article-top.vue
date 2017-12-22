<template>
  <div>
    <div v-for="(i,k) in 100" :key="k" class="article-top" @click="toDetail">
      <h3 class="tit">{{i}}介绍一下渐进式介绍一下渐进式介绍一下渐进式介绍一下渐进式web App</h3>
      <div class="clearfix"><span class="user-icon fl"></span> <span class="author fl">谭杰</span></div>
      <p class="des">每一条数据需要提供第一个select的options选项；后面的文本框需要输入类型；切换为区间输入的时候数据格式的切换，每条数据的唯一name属性。</p>
      <p class="info"><span class="crumbs">系统 / 技术部 / 外设</span><span class="create-time">07/12/20</span></p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'article-top',
    data() {
      return {}
    },
    props: {
      data: [Array, Object]
    },
    computed: {},
    watch: {},
    created() {},
    methods: {
      toDetail(event) {
        this.$emit('click', event)
      }
    },
    mounted() {
      this.$nextTick(() => {})
    }
  }
</script>

<style scoped lang="less">
  @import '../assets/mixin.less';
  .article-top{
    padding: 16px 8px;
    background: #fff;
    box-shadow: 1px 1px 6px rgba(175, 236, 223, 0.2);
    border-radius: 4px;
    margin:10px auto;
    .user-icon{
      display: inline-block;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      overflow: hidden;
      background: #ddd;
      margin-right: 6px;
    }
    .author{
      font-size: 12px;
      color: #777;
      line-height: 16px;
    }
    .tit{
      font-size: 14px;
      color: #555;
      margin: 0;
      padding-bottom: 4px;
      .textover1;
    }
    .des{
      font-size: 12px;
      color: #777;
      margin: 6px 0;
      .textover2;
    }
    .info{
      font-size: 10px;
      color: #999999;
      margin: 0;
      .clearfix;
      .crumbs{
        float: left;
      }
      .create-time{
        float: right;
      }
    }
  }
</style>