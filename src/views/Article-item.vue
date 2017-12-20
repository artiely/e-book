<template>
  <div>
    <div v-for="(i,k) in 100" :key="k" class="article" @click="toDetail">
      <h3 class="tit">{{i}}介绍一下渐进式web App</h3>
      <p class="des">每一条数据需要提供第一个select的options选项；后面的文本框需要输入类型；切换为区间输入的时候数据格式的切换，每条数据的唯一name属性。</p>
      <p class="info"><span class="crumbs">系统 / 技术部 / 外设</span><span class="create-time">07/12/20</span></p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'article-item',
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
      margin-top: 6px;
      margin-bottom:4px; 
      color: #777;
      .textover2();
    }
    .info {
      margin: 0 0 12px 0;
      font-size: 10px;
      color: #999;
      .crumbs {
        float: left;
      }
      .create-time {
        float: right;
        ;
      }
    }
  }
</style>