<template>
  <div>
    <label class="i__input--wrapper"  onclick="" :class="[mold=='o'?'i-border-radius':'',mold=='line'?'i-border-tt':'','i__state--'+state]">
          <div  class="i__pend"><slot name="prepend"></slot></div>
          <span class="i__f" v-if="iconf" >
            <i-icon :name="iconf"></i-icon>
          </span>
          <span class="i__m"><input @input="handlerInput" :type="type" class="i__input" :placeholder="placeholder"></span>
          <span class="i__type"><i-icon :name="'icon-'+state"></i-icon></span>
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
      state: String,
      mold: {
        type: String,
        default: 'o'
      },
      type: {
        type: String,
        default: 'text'
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




