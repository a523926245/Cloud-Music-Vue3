<template>
  <div class="app-container">
    <Header></Header>
    <div class="app-body">
      <RouterView></RouterView>
    </div>
    <footer></footer>
  </div>
</template>

<script setup>
import Header from '@views/Layout/components/Header.vue';
import { RouterView } from 'vue-router';
</script>

<style lang="scss" scoped>
.app-container {
  width: 100%;
  min-height: 100vh;
  position: relative;
  .app-header {
    position: absolute;
    height: 50px;
  }
  .app-body {
    position: absolute;
    top: 105px;
    left: 0;
    right: 0;
    bottom: 50px;
  }
  .app-footer {
    height: 50px;
    bottom: 0;
  }
}
</style>
