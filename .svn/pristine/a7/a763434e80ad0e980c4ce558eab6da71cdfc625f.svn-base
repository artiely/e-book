<template>
  <button class="i__button" :class="['i__button--' + type, 'i-button--' + size, {
            'is-disabled': disabled,
            'i-border-radius':type=='ghost',
            'is-plain': plain,
            'is-circle':circle,
            'i__button--block':block,
            'no-shadow':noShadow
          }]" @click="handleClick" :disabled="disabled"
      
          >
      <span >
        <slot name="icon">
          <i-icon v-if="icon"></i-icon>
        </slot>
      </span>
      <slot></slot>
    </button>
</template>

<script>
  import ICon from '../icon'
  export default {
    // 这是该组件的自定义名称，
    // 之后引用组件时就会用到这个名称。
    name: 'i-button',
    components: {
      ICon
    },
    methods: {
      handleClick(evt) {
        this.$emit('click', evt)
      }
    },
    props: {
      icon: String,
      disabled: Boolean,
      plain: Boolean,
      ghost: Boolean,
      block: Boolean,
      circle: Boolean,
      noShadow: Boolean,
      type: {
        type: String,
        default: 'base',
        validator(value) {
          return [
            'base',
            'warning',
            'ghost',
            'danger',
            'primary'
          ].indexOf(value) > -1
        }
      },
      size: {
        type: String,
        default: 'normal',
        validator(value) {
          return [
            'small',
            'normal',
            'large'
          ].indexOf(value) > -1
        }
      }
    }
  }
</script>
<style scoped lang="less">
  @import './button.less';
</style>
