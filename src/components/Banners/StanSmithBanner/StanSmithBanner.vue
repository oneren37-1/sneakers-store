<script setup lang="ts">
import {Heading, Text, Button} from "@/UI";
</script>

<template>
  <div class="banner">
    <img src="./assets/image1.png" alt="logo" class="logo">
    <div class="content">
      <Heading>
        <span class="highlight">Stan Smith</span>,<br>
        Forever!
      </Heading>
      <Button class="btn">Купить</Button>
    </div>
    <img src="./assets/image2.png" alt="image" class="image">
  </div>
</template>

<style scoped lang="scss">
  .banner {
    background: #F4EFE9;
    width: 100%;
    height: 100%;

    position: relative;

    display: flex;
    align-items: center;

    padding: 0 50px;
  }

  .logo {
    position: absolute;
    left: 20px;
    top: 16px;
  }

  .btn {
    margin-top: 20px;
  }

  .content {
    padding-top: 30px;
  }

  .highlight {
    color: #8BB43C;
  }

  .image {
    position: absolute;
    right: 0;
    bottom: 0;
  }
</style>