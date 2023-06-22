<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/20/solid';
</script>

<template>
  <footer
    class="flex justify-center items-center max-w-7xl h-32 mx-auto mt-10 text-white border-t border-gray-300 dark:border-neutral-800"
  >
    <div class="leading-loose text-center text-gray-600 dark:text-neutral-300">
      <span>Made with ♥️ by Omsin.</span>
      <br />
      <span class="text-sm italic">
        Design heavily inspired by
        <a href="https://papermc.io" target="_blank" class="inline-flex items-center">
          <span class="underline underline-offset-4">Paper MC</span>
          <ArrowTopRightOnSquareIcon class="inline w-4 ml-1" />
        </a>
      </span>
      <!-- <br />
      &copy; 2023 Krissada Singhakachain -->
    </div>
  </footer>
</template>
