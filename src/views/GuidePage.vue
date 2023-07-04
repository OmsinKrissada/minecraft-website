<script setup lang="ts">
import {
  FolderArrowDownIcon,
  MapIcon,
  ComputerDesktopIcon,
  DeviceTabletIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/vue/24/outline';
import '@lottiefiles/lottie-player';
</script>

<template>
  <section class="max-w-7xl mx-auto px-10 py-10">
    <h2 class="mb-10 text-4xl">Where do you play?</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center items-center">
      <div
        class="flex flex-col items-center px-6 py-4 bg-gray-200 border border-gray-300 text-xl shadow-lg rounded-md"
      >
        <div class="mb-6">
          <!-- <img src="@/assets/java-animated.json" class="w-40 h-40" /> -->
          <lottie-player autoplay loop mode="normal" src="/java-animated.json" class="w-40 h-40">
          </lottie-player>
        </div>
        Java
      </div>
      <div
        class="flex flex-col items-center px-6 py-4 bg-gray-200 border border-gray-300 text-xl shadow-lg rounded-md"
      >
        <div class="flex mb-6">
          <DeviceTabletIcon class="w-40 h-40 stroke-1" />
          <DevicePhoneMobileIcon class="w-40 h-40 stroke-1" />
        </div>
        Mobile / Tablet / Console
      </div>
      <!-- <div></div> -->
    </div>
  </section>
  <section class="max-w-7xl mx-auto px-10 py-10">
    <div class="mb-8">
      <h2 class="text-2xl">For Java players</h2>
    </div>
    <div>
      <h2 class="text-2xl">For Bedrock players</h2>
      <div class="flex flex-col md:flex-row gap-4 mt-4">
        <img src="@/assets/bedrock/step-1.jpg" alt="" class="w-full md:w-auto rounded" />
        <p class="text-lg">Step 1: กดที่ปุ่ม play</p>
      </div>
    </div>
  </section>
</template>
