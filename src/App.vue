<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheNav from '@/components/TheNav.vue';
import TheFooter from '@/components/TheFooter.vue';
import { maps } from '@/maps';
</script>

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-[rgb(17,17,17)]">
    <TheNav :maps="maps" />

    <RouterView />
    <TheFooter />
    <!-- <div
      class="px-2 py-2 bg-orange-200 font-medium tracking-widest text-center text-black shadow-sm not-sr-only"
    >
      THIS IS A WORK IN PROGRESS
    </div> -->
  </div>
</template>
