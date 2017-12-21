<template>
  <div>
    <label class="i__input--wrapper" :class="[type=='o'?'i-border-radius':'',type=='line'?'i-border-tt':'']">
        <div  class="i__pend"><slot name="prepend"></slot></div>
        <span class="i__f" v-if="iconf" >
          <i-icon :name="iconf"></i-icon>
        </span>
        <span class="i__m"><input @input="handlerInput" type="text" class="i__input" :placeholder="placeholder"></span>
        <span class="i__e" v-if="icone"><i-icon :name="icone"></i-icon>
          
        </span>
        <div  class="i__pend"><slot name="append"></slot></div>
      </label>
  </div>
</template>
<script>
  export default {
    name: 'i-input',
    props: {
      iconf: String,
      icone: String,
      placeholder: String,
      type: {
        type: String,
        default: 'o'
      }
    },
    methods: {
      handlerInput(event) {
        let value = event.target.value
        this.$emit('input', value)
      }
    }
  }
</script>
<style scoped lang="less">
  @import './input.less';
</style>




