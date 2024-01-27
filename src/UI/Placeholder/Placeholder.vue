<script setup lang="ts">
import {defineProps, PropType} from 'vue';
import {Text, Title} from "@/UI/Typography";
import Button from "@/UI/Button/Button.vue";
import Icon from "@/UI/Icon/Icon.vue";

const props = defineProps({
  imgSrc: {
    type: String,
    required: true
  },
  imgSize: {
    type: String as PropType<'m'|'l'>
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String
  },
  buttonText: {
    type: String
  },
});

</script>

<template>
  <div class="placeholder-wrapper">
    <div class="placeholder">
      <img class="img" :class="`img-size_${imgSize ? imgSize : 'm'}`" :src="imgSrc" alt="placeholder image">
      <Title class="title" :level="3">{{props.title}}</Title>
      <Text class="text">{{props.text}}</Text>
      <Button class="button">
        <template #left-icon>
          <Icon name="arrowLeft" />
        </template>
        {{props.buttonText}}
      </Button>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .placeholder {
    &-wrapper {
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .img {
    margin-bottom: 21px;
  }

  .img-size{
    &_m {
      width: 70px;
    }
    &_l {
      width: 120px;
    }
  }

  .title {
    margin-bottom: 9px;
  }

  .text {
    width: 250px;
    text-align: center;
  }

  .button {
    margin-top: 40px;
  }
</style>