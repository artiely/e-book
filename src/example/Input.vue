<template>
  <i-blank style="background:#f8f8f8">
    <i-space></i-space>
    <i-input iconf="icon-sousuo" type="o" icone="icon-sousuo"></i-input>
    <i-space></i-space>
    <i-button type='ghost' block>block</i-button>
    <i-space></i-space>
    <i-input icone="icon-sousuo"></i-input>
    <i-space></i-space>
    <i-input icone="icon-weibiaoti35" placeholder="请输入..." mold="line"></i-input>
    <i-space></i-space>
    <i-input state="warning">
      <span slot="prepend">http://</span>
      <span slot="append">.com</span>
    </i-input>
    <i-space></i-space>
    <i-input placeholder="请输入密码..." mold="line" type="password" state="right">
      <span slot="prepend"><i class="iconfont icon-wode"></i></span>
    </i-input>
    <i-space></i-space>
    <i-input placeholder="请输入..." mold="line" v-model="value" state="error">
      <span slot="prepend">
       <select name="" id="">
       <option value="">+18</option>
       <option value="">+69</option>
       </select>
       <i class="iconfont icon-weibiaoti35"></i>
       </span>
    </i-input>
    <i-space></i-space>
    {{value}}
  </i-blank>
</template>
<script>
  export default {
    data() {
      return {
        value: ''
      }
    }
  }
</script>

