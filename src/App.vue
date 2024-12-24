<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HeaderVue from './components/HeaderVue.vue';
</script>

<template>
  <div class="relative flex text-[12px] h-full">
    <HeaderVue />
    <main class="flex-1 m-[8px] bg-white rounded-[12px] px-[24px] py-[16px] w-full">
      <RouterView />
    </main>
  </div>
  
</template>

<style scoped>

</style>
