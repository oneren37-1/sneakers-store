<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
  block: {
    type: Boolean,
    default: false,
  }
});
</script>

<template>
  <button class="button" :class="[props.block ? 'block' : '']">
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
    background: #9DD458;

    color: #FFF;
    text-align: center;
    font-size: 16px;
    line-height: 19px;
    font-style: normal;
    font-weight: 600;

    display: flex;
    align-items: center;

    cursor: pointer;
  }

  .left-icon {
    padding-right: 10px;
  }

  .right-icon {
    padding-left: 10px;
  }

  .left-icon,
  .right-icon {
    width: 14px;
    height: 12px;

    display: flex;
    align-items: center;
  }
</style>