<script setup lang="ts">
import {defineProps, PropType} from 'vue';

  const props = defineProps({
    bold: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<'s'|'m'|'l'>,
      default: 'm',
    }
  });
</script>

<template>
  <span class="text" :class="[
      props.bold ? 'bold' : '',
      `size-${props.size}`
    ]"><slot /></span>
</template>

<style scoped lang="scss">
  .text {
    font-weight: 400;

    &.bold {
      font-weight: 700;
    }

    &.size {
      &-s {
        font-size: 11px;
      }
      &-m {
        font-size: 14px;
      }
      &-l {
       font-size: 16px;
     }
    }
  }
</style>