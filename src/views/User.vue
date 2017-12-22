<template>
  <div class="index page">
    <div class="userInfo">
      <div class="usericon">
        <div class="icon-wrap"></div>
      </div>
      <div class="usertext">
        <div class="nickname">谭杰</div>
        <div class="company">群思科技（武汉）有限公司</div>
      </div>
    </div>
    <van-cell-group>
      <van-cell title="姓名" value="王大锤" />
      <van-cell title="所属部门" value="技术部" />
      <van-cell title="管辖公司" value="史塞克" label="描述信息" />
    </van-cell-group>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data() {
      return {
        titles: []
      }
    },
    computed: {},
    created() {
      this.titles = this.titleList
    },
    methods: {
      onClickRight() {
        this.$router.go(-1)
      }
    },
    mounted() {
      this.$nextTick(() => {})
    }
  }
</script>

<style scoped lang="less">
@import '../assets/mixin.less';
.userInfo{
  display: flex;
  padding: 20px 0;
  background: #fff;
  .b_t;
  .usericon{
    width: 60px;
    padding-left: 10px;
    .icon-wrap{
      height: 48px;
      width: 48px;
      border-radius:50%;
      overflow: hidden;
      background: #ddd;
      margin: 0 auto;
    }
  }
  .usertext{
    flex: 1;
    .nickname{
      font-size: 16px;
      padding-top: 4px;
      color: #666;
    }
    .company{
      font-size: 12px;
      padding-top: 4px;
      color: #777;
    }
  }
}
</style>