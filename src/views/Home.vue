<script setup lang="ts">
import { FolderArrowDownIcon, MapIcon } from '@heroicons/vue/24/outline'
import { useMediaQuery } from '@vueuse/core'
import { useHead } from '@vueuse/head'
import { headData } from '@/head'
import { maps } from '@/maps'

const md = useMediaQuery('(min-width: 768px)')

useHead({
  title: "Omsin's Minecraft Server",
  meta: [
    //   { name: 'title', content: headData.title },
    { name: 'og:title', content: headData.title }
    //   { name: 'description', content: headData.description },
    //   { name: 'og:description', content: headData.description },
    //   { name: 'og:image', content: '@/assets/intro_vid_thumbnail.webp' }
  ]
})
</script>

<template>
  <main>
    <section
      class="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-10 py-10"
    >
      <div class="py-4 space-y-4">
        <h1
          class="font-medium lg:leading-tight dark:text-white text-center md:text-left text-4xl lg:text-5xl"
        >
          Our
          <span
            class="bg-gradient-to-r from-fuchsia-500 to-indigo-500 bg-clip-text text-transparent"
            >Private</span
          >
          <br />
          Minecraft Server
        </h1>
        <p class="font-medium text-center md:text-left text-xl text-black dark:text-white">
          Join now at
          <span
            class="bg-clip-text bg-gradient-to-br from-amber-400 to-orange-600 text-transparent font-bold"
          >
            mc.krissada.com</span
          >
        </p>
        <p class="my-2 lg:text-xl md:leading-normal text-gray-900 dark:text-neutral-300">
          เซิฟ survival เปิดเล่นกันเอง host ในไทยแล้วก็หวังว่า ping จะดีอะนะ 55
          <br />
          เข้าได้ทั้ง Java (1.9 ขึ้นไป) และ Bedrock (1.19.30 ถึง ล่าสุด)
        </p>
      </div>
      <div>
        <video
          v-if="md"
          class="my-4 aspect-video rounded-lg shadow-xl shadow-gray-500/30"
          src="@/assets/intro_vid.webm"
          alt="video intro"
          autoplay
          muted
          loop
          width="500"
        />
        <img
          v-else
          src="@/assets/intro_vid_thumbnail_2.webp"
          alt="thumbnail"
          class="my-4 aspect-video rounded-lg shadow-xl shadow-gray-500/30"
        />
      </div>
    </section>

    <section class="w-full bg-gray-200 dark:bg-gray-800/30">
      <div class="max-w-7xl mx-auto px-10 py-8">
        <h2 class="mb-8 font-semibold text-xl text-black dark:text-neutral-200">
          Maps we played together
        </h2>
        <div class="flex flex-col md:flex-row gap-8 text-gray-900 dark:text-neutral-300">
          <div
            v-for="map in maps"
            class="relative group flex flex-col gap-2 p-4 hover:bg-gray-300/50 dark:hover:bg-gray-800 rounded-md transition-colors cursor-default"
          >
            <div class="flex items-center gap-2">
              <h3 class="font-medium">{{ map.name }}</h3>
              <span
                v-if="map.active"
                class="w-fit px-2 bg-gradient-to-br from-fuchsia-500 to-violet-500 text-sm text-white rounded-full"
                >Active</span
              >
            </div>
            <p class="text-gray-700 dark:text-neutral-400">
              Native version:
              <span class="font-medium">{{ map.native_version }}</span>
            </p>
            <div class="flex flex-row gap-4 font-medium text-sm text-gray-800">
              <a
                class="flex items-center px-2 py-1 text-white bg-blue-500 dark:bg-blue-600 rounded"
                :href="map.web"
              >
                <MapIcon class="w-5 h-5 mr-2" />
                View map
              </a>
              <a
                v-if="map.download"
                :href="map.download"
                download
                class="flex items-center px-2 py-1 text-white bg-emerald-500 dark:bg-emerald-600 rounded"
              >
                <FolderArrowDownIcon class="w-5 h-5 mr-2" />
                Download
              </a>
            </div>

            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <p v-if="map.archived_at" class="font-medium text-xs dark:text-neutral-500">
                Archival date: {{ map.archived_at }}
              </p>
            </transition>
          </div>
        </div>
      </div>
    </section>
    <section class="max-w-7xl mx-auto space-y-16 px-10 py-10">
      <div class="flex flex-col gap-6 md:flex-row md:gap-8 xl:gap-24 items-center">
        <div class="flex-1">
          <h2 class="mb-4 font-semibold text-2xl md:text-4xl text-black dark:text-neutral-200">
            Real-time web map
          </h2>
          <p class="md:mt-6 md:text-xl text-gray-900 dark:text-neutral-300 mt-3">
            Are you lost, or are you admiring our beautiful map?
            <!-- <br /> -->
            Explore the maps hassle-free, without launching the game here. Made possible using
            DynMap plugin.
            <span class="font-medium text-emerald-500">Available in both 3D and 2D.</span>
          </p>
        </div>
        <div
          class="w-full flex-1 rounded-xl bg-gray-900 aspect-video relative overflow-clip shadow-2xl shadow-teal-500/50"
        >
          <img class="w-full h-full" src="@/assets/map_preview.webp" alt="web map preview" />
        </div>
      </div>
      <div class="flex flex-col gap-6 md:flex-row-reverse md:gap-8 xl:gap-24 items-center">
        <div class="flex-1">
          <h2 class="my-4 font-semibold text-2xl md:text-4xl text-black dark:text-neutral-200">
            Discord chat link
          </h2>
          <p class="md:mt-6 md:text-xl text-gray-900 dark:text-neutral-300 mt-3">
            Chat directly to your friends from Discord chat to in-game chat, and the other way
            around.
            <span class="text-fuchsia-400"
              >*Discord reply is only available for active players.</span
            >
          </p>
        </div>
        <div
          class="w-full flex-1 rounded-xl bg-gray-900 aspect-video relative overflow-clip shadow-2xl shadow-indigo-500/50"
        >
          <img
            class="w-full h-full"
            src="@/assets/discord_chat_preview_big.webp"
            alt="discord chat preview"
          />
        </div>
      </div>
      <div class="flex flex-col gap-6 md:flex-row-reverse md:gap-8 xl:gap-24 items-center">
        <div class="flex-1">
          <h2 class="my-4 font-semibold text-2xl md:text-4xl text-black dark:text-neutral-200">
            Automatic backups
          </h2>
          <p class="md:mt-6 md:text-xl text-gray-900 dark:text-neutral-300 mt-3">
            Your progress will not be lost. At least not by accident 😂. Whether it be unexpected
            server crashes or due to version upgrades.
          </p>
        </div>
        <!-- <div
					class="w-full flex-1 rounded-xl bg-gray-900 aspect-video relative overflow-clip shadow-2xl shadow-teal-500/50">
					<img
						class="w-full h-full"
						src="./assets/map_preview.webp"
						alt="web map preview" />
				</div> -->
      </div>
    </section>
    <TheFooter />
  </main>
</template>
