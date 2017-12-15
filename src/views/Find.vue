<template>
  <div class="index page">
    <van-search v-model="value" placeholder="请输入关键词" :showAction="true" @search="onSearch">
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
      onSearch() {}
    },
    mounted() {
      this.$nextTick(() => {})
    }
  }
</script>

<style scoped lang="less">

</style>