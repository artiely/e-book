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
