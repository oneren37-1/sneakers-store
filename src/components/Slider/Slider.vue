<script setup lang="ts">

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import {StanSmithBanner} from "@/components/Banners";

</script>
<template>
  <Carousel class="carousel" >
    <Slide v-for="slide in [0, 1, 2]" :key="slide" class="carousel__item">
      <StanSmithBanner />
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<style>

.carousel {
  width: 100%;
  height: 300px;

  border-radius: 20px;
  overflow: hidden;
  text-align: left;
}

.carousel__item {
  min-height: 300px;
  width: 100%;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
  border-radius: 50%;
}

.carousel__track {
  margin: 0;
}

</style>