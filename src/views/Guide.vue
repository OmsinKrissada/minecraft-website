<script setup lang="ts">
import {
  FolderArrowDownIcon,
  MapIcon,
  ComputerDesktopIcon,
  DeviceTabletIcon,
  DevicePhoneMobileIcon
} from '@heroicons/vue/24/outline'
</script>

<template>
  <section class="max-w-7xl mx-auto px-10 py-10">
    <h2 class="mb-10 text-4xl">Where are you playing?</h2>
    <div class="flex flex-col md:flex-row justify-evenly items-center">
      <div v-for="i in 2" class="flex flex-col items-center p-4 bg-neutral-200 text-xl rounded-md">
        <ComputerDesktopIcon class="w-48 h-48 stroke-slate-500" />
        Java {{ i }}
      </div>
      <!-- <div>Mobile / Tablet / Console</div> -->
    </div>
  </section>
</template>
