<script setup lang="ts">
import {Heading, Text, Icon} from "@/UI";
import {formatPrice} from "@/utils";

</script>

<template>
  <header class="header">
    <a href="/" class="logo">
      <img src="./assets/logo.png" alt="logo" class="logo-img">
      <span class="logo-name">
      <Heading :level="3">SNEAKERS SHOP</Heading>
      <Text>Магазин лучших кроссовок</Text>
    </span>
    </a>
    <nav class="nav">
      <a href="#" class="nav-item">
        <Icon name="cart" />
        <Text>{{formatPrice(1205)}}</Text>
      </a>
      <a href="#" class="nav-item">
        <Icon name="heartNav" />
        <Text>Закладки</Text>
      </a>
      <a href="#" class="nav-item">
        <Icon name="user" />
        <Text>Профиль</Text>
      </a>
    </nav>
  </header>
</template>

<style scoped lang="scss">
  .header {
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    text-decoration: none;
    color: #9D9D9D;
    display: flex;
    gap: 16px;

    &-img {
      width: 40px;
      height: 40px;
    }
  }

  .nav {
    display: flex;
    gap: 32px;
  }

  .nav-item {
    display: flex;
    align-items: flex-start;
    gap: 8px;

    color: #5C5C5C;
    text-decoration: none;
  }
</style>