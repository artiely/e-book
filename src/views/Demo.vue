<template>
  <div>
    <i-button>默认</i-button>
    <i-button type='warning'>warning</i-button>
    <i-space></i-space>
    <i-button type='danger'>danger</i-button>
    <i-space></i-space>
    <i-button type='ghost'>ghost</i-button>
    <i-space></i-space>
    <i-button type='primary'>primary</i-button>
    <i-space></i-space>
    <i-button type='ghost' block>block</i-button>
    <i-space></i-space>
    <i-button type='primary' plain>plain</i-button>
    <i-space></i-space>
    <i-button block plain>block-plain</i-button>
    <i-space></i-space>
    <i-button type='ghost' block circle>circle</i-button>
    <i-space></i-space>
    <i-button type='ghost' block plain>plain</i-button>
    <i-space></i-space>
    <i-button block circle>circle</i-button>
    <i-space></i-space>
    <i-button circle>circle</i-button>
    <i-space></i-space>
    <i-button circle > <span slot="icon"><i class="iconfont icon-rijianmoshi"></i></span>shadow</i-button>
    <i-space></i-space>
    <i-button type='danger'>shadow</i-button>
    <i-button type='danger' disabled>disabled</i-button>
    <i-icon></i-icon>
    <i-button type='danger' noShadow>noShadow</i-button>
    
  </div>
</template>

<script>
 
</script>
<style>
.px{
  border: 1px solid #333;
  padding: 6px;
  margin-top:10px;

}
</style>
