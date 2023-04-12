<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useMediaQuery, useWindowScroll } from '@vueuse/core'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import ThemeChanger from '@/components/nav/ThemeChanger.vue'
import {
  ChevronDownIcon,
  Bars3BottomLeftIcon,
  XMarkIcon,
  PlayCircleIcon
} from '@heroicons/vue/20/solid'
import axios from 'axios'
import { maps } from '@/maps'

// const route = useRoute()
const show = ref(false)
const md = useMediaQuery('(min-width: 768px)')
const { y } = useWindowScroll()
const isTop = computed(() => y.value == 0)

const serverStatus = ref('Fetching...')
async function getServerStatus() {
  try {
    serverStatus.value = (await axios.get('https://mc.krissada.com/mcsleep/status')).data?.status
  } catch {
    serverStatus.value = 'Offline'
  }
}

function sendServerStart() {
  axios.post('https://mc.krissada.com/mcsleep/wakeup')
}

onMounted(() => {
  getServerStatus()
  setInterval(getServerStatus, 2000)
})
</script>
<template>
  <!-- <button data-collapse-toggle></button> -->
  <nav
    class="sticky flex top-0 font-medium bg-gray-100/60 dark:bg-[rgb(17,17,17)]/60 backdrop-blur-md text-sm text-gray-600 dark:text-gray-300 duration-200 transition-shadow z-40"
    :class="{ 'shadow-md': !isTop && !show }"
  >
    <Bars3BottomLeftIcon
      v-if="!md && !show"
      @click="show = !show"
      class="md:hidden w-12 h-12 p-2"
    />
    <XMarkIcon v-if="!md && show" @click="show = !show" class="md:hidden w-12 h-12 p-2 z-50" />
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform -translate-y-1/3 opacity-0"
      enter-to-class="transform opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform opacity-100"
      leave-to-class="transform -translate-y-1/3 opacity-0"
    >
      <div
        v-show="show || md"
        class="absolute md:relative flex flex-col md:flex-row items-center gap-10 md:gap-6 md:h-16 w-full max-w-7xl mx-auto p-8 md:p-4 md:pb-4 origin-top bg-gray-100/60 dark:bg-[rgb(17,17,17)]/60 backdrop-blur-md shadow-md md:shadow-none"
      >
        <RouterLink to="/">Home</RouterLink>
        <Menu as="div" v-slot="{ open }">
          <MenuButton class="inline-flex w-full justify-center rounded-md">
            Maps
            <ChevronDownIcon
              class="h-5 w-5 transition-transform"
              :class="{ '-rotate-180': open }"
            />
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
              class="relative md:absolute flex flex-col mt-4 p-1 origin-top md:origin-top-left rounded-md bg-white dark:bg-neutral-900 dark:border border-gray-600 shadow-lg"
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
        <!-- <RouterLink to="/how_to_join" class="">How To Join</RouterLink> -->
        <RouterLink to="/faq" class="">FAQ</RouterLink>
        <div v-if="md" class="flex items-center gap-6 md:ml-auto">
          <div class="flex items-center not-sr-only">
            <!-- Status: -->
            <button
              v-if="serverStatus === 'Sleeping'"
              class="flex items-center px-2 py-1 hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-neutral-600 rounded-md transition-colors"
              @click="sendServerStart"
            >
              <PlayCircleIcon class="inline w-5 mr-1" />
              Click to Wake
            </button>

            <img
              v-if="serverStatus === 'Running'"
              src="https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/38/Experience_Orb.gif"
              class="inline w-5 ml-2"
            />
            <img
              v-if="serverStatus === 'Running'"
              src="https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/38/Experience_Orb.gif"
              class="absolute w-5 ml-2 animate-ping"
            />
            <p
              v-else-if="serverStatus === 'Offline' || serverStatus === 'Sleeping'"
              class="inline w-5 ml-2"
            >
              ⚫
            </p>
            <p class="font-semibold ml-1">
              {{ serverStatus }}
            </p>
          </div>
          <ThemeChanger class="relative" />
        </div>
      </div>
    </transition>
    <div v-if="!md" class="ml-auto flex items-center gap-6 pr-2">
      <div class="flex items-center not-sr-only">
        <!-- Server: -->
        <button
          v-if="serverStatus === 'Sleeping'"
          class="flex items-center px-2 py-1 hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-neutral-600 rounded-md transition-colors"
          @click="sendServerStart"
        >
          <PlayCircleIcon class="inline w-5 mr-1" />
          Click to Start
        </button>
        <img
          v-if="serverStatus === 'Running'"
          src="https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/38/Experience_Orb.gif"
          class="inline w-5 ml-2"
        />
        <img
          v-if="serverStatus === 'Running'"
          src="https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/38/Experience_Orb.gif"
          class="absolute w-5 ml-2 animate-ping"
        />
        <p
          v-else-if="serverStatus === 'Offline' || serverStatus === 'Sleeping'"
          class="inline w-5 ml-2"
        >
          ⚫
        </p>
        <p class="font-semibold ml-1">
          {{ serverStatus }}
        </p>
      </div>
      <ThemeChanger />
    </div>
  </nav>
</template>

<style>
.router-link-exact-active {
  @apply underline underline-offset-8 decoration-2 decoration-purple-600 text-purple-500 dark:text-purple-400 dark:decoration-purple-500;
}
</style>
