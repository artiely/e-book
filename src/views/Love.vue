<template>
  <div class="index page">
    love
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
    computed: {
    },
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