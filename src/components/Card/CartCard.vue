<script setup lang="ts">

import {Button, Icon, Text} from "@/UI";
import {formatPrice} from "../../utils";

const props = defineProps({
  imgSrc: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})


</script>

<template>
  <div class="card">
    <img :src="imgSrc" alt="img" class="img">
    <div class="content">
      <Text>{{title}}</Text>
      <Text bold>{{ formatPrice(price) }}</Text>
    </div>
    <Button variant="light" class="del">
      <template #left-icon>
        <Icon name="close" />
      </template>
    </Button>
  </div>
</template>

<style scoped lang="scss">

</style>