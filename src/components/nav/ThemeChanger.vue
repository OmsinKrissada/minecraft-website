<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useColorMode, useCycleList, useMediaQuery } from '@vueuse/core';
import { ComputerDesktopIcon, MoonIcon, SunIcon } from '@heroicons/vue/20/solid';

const color = useColorMode({ emitAuto: true });
const { state, next } = useCycleList(['dark', 'light', 'auto'], { initialValue: color });

const themeHover = ref(false);
const md = useMediaQuery('(min-width: 768px)');
function cycleTheme() {
  next();
  color.value = <'dark' | 'light' | 'auto'>state.value;
}
</script>

<template>
  <div class="group w-5 h-5">
    <button @click="cycleTheme" @mouseenter="themeHover = true" @mouseleave="themeHover = false"
      aria-label="theme changer">
      <ComputerDesktopIcon v-if="state === 'auto'" class="w-5 h-5" />
      <MoonIcon v-if="state === 'dark'" class="w-5 h-5" />
      <SunIcon v-if="state === 'light'" class="w-5 h-5" />
    </button>
    <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
      <p v-if="themeHover && md"
        class="absolute origin-top left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-white dark:bg-black dark:border border-neutral-600 rounded-md shadow-md">
        {{ state }}
      </p>
    </transition>
  </div>
</template>
