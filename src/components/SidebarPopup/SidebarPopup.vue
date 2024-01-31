<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps({
  show: {
    type: Boolean,
    required: true
  }
});
</script>

<template>
  <div class="sidebar-popup" :class="props.show ? 'show' : ''">
    <div class="overlay"></div>
    <aside class="sidebar">
      <slot></slot>
    </aside>
  </div>
</template>

<style scoped lang="scss">
  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: none;
  }

  .sidebar {
    position: absolute;
    right: -100%;
    top: 0;
    bottom: 0;
    width: 400px;

    background-color: #fff;
  }

  .sidebar-popup.show {
    & .overlay {
      display: block;
    }

    & .sidebar {
      right: 0;
    }
  }

</style>