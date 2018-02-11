<template>
  <div class="index page">
    <div class="wrapper">
      <cube-scroll>
        <div class="userInfo">
          <div class="usericon">
            <div class="icon-wrap"></div>
          </div>
          <div class="usertext">
            <div class="nickname">{{userInfo.userName}}</div>
            <div class="company">群思科技有限公司</div>
          </div>
        </div>
        <!-- <van-cell-group>
          <van-cell title="姓名" value="王大锤" />
          <van-cell title="所属部门" value="技术部" />
          <van-cell title="管辖公司" value="史塞克" label="描述信息" />
        </van-cell-group> -->
        <div @click="logout" class="logout">注销</div>
      </cube-scroll>
    </div>
  </div>
</template>
<script>
  import Cookies from 'js-cookie'
  export default {
    name: 'app',
    data() {
      return {
        titles: []
      }
    },
    computed: {
      userInfo() {
        return this.$store.state.user.userInfo
      }
    },
    created() {
      this.titles = this.titleList
    },
    methods: {
      onClickRight() {
        this.$router.go(-1)
      },
      logout() {
        Cookies.remove('__userInfo')
        this.$router.replace('/login')
        window.location.reload()
      }
    },
    mounted() {
      this.$nextTick(() => {})
    }
  }
</script>

<style scoped lang="less">
  @import '../assets/mixin.less';
  .wrapper {
    height: 100vh;
  }
  .logout{
    height: 40px;
    width: 96%;
    margin:8px auto;
    text-align: center;
    line-height: 40px;
    background: #eee;
    color: #666;
    border-radius: 3px;
  }
  .userInfo {
    display: flex;
    padding: 20px 0;
    background: #fff;
    .b_t;
    .usericon {
      width: 60px;
      padding-left: 10px;
      .icon-wrap {
        height: 48px;
        width: 48px;
        border-radius: 50%;
        overflow: hidden;
        background: #ddd;
        margin: 0 auto;
      }
    }
    .usertext {
      flex: 1;
      .nickname {
        font-size: 16px;
        padding-top: 4px;
        color: #666;
      }
      .company {
        font-size: 12px;
        padding-top: 4px;
        color: #777;
      }
    }
  }
</style>