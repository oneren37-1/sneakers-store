<script setup lang="ts">
import {defineProps, PropType} from 'vue';

const props = defineProps({
  level: {
    type: Number as PropType<1|2|3|4|5>,
    default: 1,
  }
});
</script>

<template>
  <component :is="`h${props.level}`" class="title" :class="[`title_${props.level}`]"><slot /></component>
</template>

<style scoped lang="scss">
  .title {
    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    padding: 0;
    margin: 0;

    &_1 {
      font-size: 38px;
    }
    &_2 {
      font-size: 32px;
    }
    &_3 {
      font-size: 22px;
    }
    &_4 {
      font-size: 14px;
    }
    &_5 {
      font-size: 12px;
    }
  }
</style>