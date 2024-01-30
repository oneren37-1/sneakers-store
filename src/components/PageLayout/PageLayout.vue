<script setup lang="ts">

</script>

<template>
  <div class="wrapper">
    <div class="inner">
      <header class="header">
        <slot name="header" />
      </header>
      <div class="divider"></div>
      <main class="main">
        <slot name="main" />
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .wrapper {
    width: 100%;
    min-height: 100vh;
    background: #E7F6FF;
    padding: 85px;
  }

  .inner {
    width: 100%;
    height: 100%;

    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
  }

  .header,
  .main {
    padding: 45px;
  }

  .divider {
    width: 100%;
    height: 1px;
    background: #EAEAEA;
  }

</style>