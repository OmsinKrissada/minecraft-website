<script setup lang="ts">
import { PlayCircleIcon } from '@heroicons/vue/20/solid'
import axios from 'axios'
import { ref, onMounted } from 'vue'

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
</template>
