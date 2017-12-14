<template>
  <div class="login">
    <div class="logo">
      <img :src="require('../assets/logo_eng_white.png')" alt="">
    </div>
    <van-cell-group class="login-box">
      <van-field v-model="username" icon="clear" placeholder="请输入用户名"></van-field>
      <van-field v-model="password" icon="clear" placeholder="请输入密码" type="password"></van-field>
    </van-cell-group>
    <p class="error-tip"><i class="iconfont icon-jinggao"></i>用户名或密码错误</p>
    <t-button>登录</t-button>
  </div>
</template>

<script>
  import TButton from '@/components/button/Button.vue'
  export default {
    name: 'login',
    components: {
      TButton
    },
    data() {
      return {
        username: '',
        password: ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .login-box {
    margin: 0 auto 
  }
  .logo{
    margin: 80px auto 20px
  }
  .error-tip{
    margin: 0;
    padding: 6px;
    font-size: 12px;
    color: #f00;
    .iconfont{
      margin-right: 4px;
      font-size: 12px;
    }
  }
</style>
