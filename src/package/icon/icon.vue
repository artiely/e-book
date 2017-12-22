<template>
  <i class="iconfont" :class="name"></i>
</template>
<script>
  export default {
    name: 'i-icon',
    props: {
      name: {
        type: String,
        default: 'icon-zhuanlan_jiemu'
      }
    }
  }
</script>
<style>
.iconfont::before{
  text-shadow:rgba(200, 200, 200, 0.3) 1px 0px 1px;
}
</style>

