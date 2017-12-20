<template>
  <div class="index page">
    <div style="padding-top:20px"></div>
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

</style>