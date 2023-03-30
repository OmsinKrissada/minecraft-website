<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheNav from '@/components/TheNav.vue'
import TheFooter from '@/components/TheFooter.vue'
import { maps } from '@/maps'
</script>

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-[rgb(17,17,17)]">
    <header>
      <TheNav :maps="maps" />
    </header>

    <RouterView />
    <TheFooter />
  </div>
</template>
