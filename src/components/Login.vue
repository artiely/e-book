<template>
  <div class="login">
    <div class="logo">
      <img :src="require('../assets/logo_eng_white.png')" alt="">
    </div>
    <van-cell-group class="login-box">
      <van-field v-model.trim="username" icon="clear" placeholder="请输入用户名"></van-field>
      <van-field v-model.trim="password" icon="clear" placeholder="请输入密码" type="password"></van-field>
    </van-cell-group>
    <p class="error-tip" v-show="error"><i class="iconfont icon-jinggao"></i>{{errorMsg}}</p>
    <t-button @click.native="login">登录</t-button>
  </div>
</template>

<script>
import TButton from '@/components/button/Button.vue'
import Cookies from 'js-cookie'
export default {
  name: 'login',
  components: {
    TButton
  },
  data() {
    return {
      username: '',
      password: '',
      error: false,
      errorMsg: ''
    }
  },
  methods: {
    login() {
      if (this.username === '' || this.password === '') {
        this.error = true
        this.errorMsg = '用户名和密码不能为空'
        return
      }
      let data = `username=${this.username}&password=${this.password}&captcha=&loginNum=1`
      this.$api.LOGIN(data).then(res => {
        if (res.code === 0) {
          this.$toast({
            message: '登录成功',
            position: 'top'
          })
          this.$api.GET_USER_INFO().then(res2 => {
            this.$store.dispatch('getUserInfo', res2.user)
            Cookies.set('__userInfo', res2.user)
            this.$router.replace('/index')
          })
        } else {
          this.error = true
          this.errorMsg = res.msg
        }
      })
    }
  },
  created() { }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.login-box {
  margin: 0 auto;
}
.logo {
  margin: 80px auto 20px;
}
.error-tip {
  margin: 0;
  padding: 6px;
  font-size: 12px;
  color: #f00;
  .iconfont {
    margin-right: 4px;
    font-size: 12px;
  }
}
</style>
