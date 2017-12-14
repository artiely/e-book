<template>
  <div class="index page">
    <div class="sticker">
      <div class="stickerCon">
        <van-nav-bar title="拖动排序" @click-right="onClickRight">
          <div slot="right">
            <i class="iconfont icon-X"></i>
          </div>
        </van-nav-bar>
        <van-cell-group class="group">
          <draggable v-model="titles" element="span" :options="{draggable:'.item'}">
            <van-cell v-for="(element,k) in titles" :key="k" class="item">
              <div slot="title">
                <i class="iconfont icon-paixu move"></i> {{element}}
              </div>
            </van-cell>
          </draggable>
        </van-cell-group>
      </div>
    </div>
    <div class="sfooter">@Artiely</div>
  </div>
</template>
<script>
  import draggable from 'vuedraggable'
  export default {
    name: 'app',
    data() {
      return {
        titles: []
      }
    },
    computed: {
      titleList() {
        return this.$store.state.user.titleList
      }
    },
    watch: {
      titles: {
        handler(val) {
          this.$store.dispatch('sortTitleList', val)
        }
      }
    },
    components: {
      draggable
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
  .item {
    text-align: left;
  }
  .page {
    background: #fafafa;
  }
  .group {
    width: 50%;
  }
</style>