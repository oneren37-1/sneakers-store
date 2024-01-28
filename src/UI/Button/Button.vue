<script lang="ts" setup>
import {defineProps, PropType} from 'vue';

const props = defineProps({
  block: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String as PropType<'primary'|'light'>,
    default: 'primary',
  }
});
</script>

<template>
  <button class="button" :class="[
      props.block ? 'block' : '',
      props.variant
  ]">
    <span v-if="$slots['left-icon']" class="left-icon">
      <slot name="left-icon"/>
    </span>
    <slot />
    <span v-if="$slots['right-icon']" class="right-icon">
      <slot name="right-icon"/>
    </span>
  </button>
</template>

<style scoped lang="scss">
  .button {
    outline: none;
    border: none;
    padding: 18px 31px;

    border-radius: 18px;

    text-align: center;
    font-size: 16px;
    line-height: 19px;
    font-style: normal;
    font-weight: 600;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    &.primary {
      color: #FFF;
      background: #9DD458;
    }

    &.light {
      background: #FFF;
      border: 0.5px solid #F3F3F3;
      padding: 10px 10px;
      border-radius: 7px;
    }
  }

  .left-icon:not(:last-child) {
    margin-right: 10px;
  }

  .right-icon:not(:last-child) {
    margin-left: 10px;
  }

  .left-icon,
  .right-icon {
    width: 14px;
    height: 12px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>