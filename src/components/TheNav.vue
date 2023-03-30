<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useColorMode, useCycleList } from '@vueuse/core'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDownIcon, ComputerDesktopIcon, MoonIcon, SunIcon } from '@heroicons/vue/20/solid'
import { maps } from '@/maps'

const color = useColorMode({ emitAuto: true })
const { state, next } = useCycleList(['dark', 'light', 'auto'], { initialValue: color })
const route = useRoute()
const themeHover = ref(false)
</script>
<template>
  <nav
    class="flex items-center gap-6 max-w-7xl h-16 mx-auto px-4 font-medium text-sm text-gray-600 dark:text-gray-300"
  >
    <RouterLink to="/">Home</RouterLink>
    <Menu as="div" v-slot="{ open }">
      <MenuButton class="inline-flex w-full justify-center rounded-md">
        Maps
        <ChevronDownIcon class="h-5 w-5 transition-transform" :class="{ '-rotate-180': open }" />
      </MenuButton>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute flex flex-col mt-4 p-1 origin-top-left rounded-md bg-white dark:bg-neutral-900 dark:border border-gray-600 shadow-lg"
        >
          <MenuItem
            v-for="map in maps"
            v-slot="{ active }"
            class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded"
          >
            <a
              :class="{
                'text-indigo-500 dark:text-gray-200': active
              }"
              :href="map.web"
            >
              {{ map.name }}
            </a>
          </MenuItem>
        </MenuItems>
      </transition>
    </Menu>
    <RouterLink to="/how_to_join" class="">How To Join</RouterLink>
    <RouterLink to="/faq" class="">FAQ</RouterLink>
    <div class="relative group ml-auto">
      <button @click="next()" @mouseenter="themeHover = true" @mouseleave="themeHover = false">
        <ComputerDesktopIcon v-if="state === 'auto'" class="w-5 h-5" />
        <MoonIcon v-if="state === 'dark'" class="w-5 h-5" />
        <SunIcon v-if="state === 'light'" class="w-5 h-5" />
      </button>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <p
          v-if="themeHover"
          class="absolute origin-top-left left-1/2 -translate-x-1/2 mt-2 bg-cyan-300 border rounded-md shadow"
        >
          Current theme: {{ state }}
        </p>
      </transition>
    </div>
  </nav>
</template>

<style>
.router-link-exact-active {
  @apply underline underline-offset-8 decoration-2 decoration-purple-600 text-purple-500 dark:text-purple-400 dark:decoration-purple-500;
}
</style>
