<script setup lang="ts">
import { QuestionMarkCircleIcon } from '@heroicons/vue/24/outline'
import { useHead } from '@vueuse/head'
import { marked } from 'marked'

useHead({
  title: "FAQ | Omsin's Minecraft Server",
  meta: [{ name: 'og:title', content: "FAQ | Omsin's Minecraft Server" }]
})

const list: { question: string; answer: string }[] = [
  {
    question: 'ใช้เวอร์ชันอะไรเข้าได้บ้าง',
    answer:
      'ถ้าเป็น Java เข้าได้ตั้งแต่ 1.9 ขึ้นไป ส่วน Bedrock ไม่การันตีแต่ใช้เวอร์ชันล่าสุดได้แน่นอน โดยที่ตัวเซิฟจะรันเป็นเวอร์ชันที่ระบุเป็น "Native Version" [บนหน้าหลัก](/)'
  },
  {
    question: 'เล่นในมือถือ/iPad เข้าได้ไหม',
    answer:
      '**เข้าได้** ใช้ IP เดียวกันได้เลย port เป็น 19132 (default) แต่ก็ต้องบอกไว้ก่อนว่า mechanic เป็น Java นะ เช่น craft เรือไม่ใช้ shovel'
  },
  {
    question: 'เปิดทั้งวันไหม',
    answer:
      'เซิฟจะเปิดโดยอัตโนมัติ เมื่อ <span class="text-fuchsia-500 dark:text-fuchsia-400">มีคนกดเข้าเซิฟ</span> หรือ <span class="text-fuchsia-500 dark:text-fuchsia-400">มีคนกดปุ่ม "Click to Wake"</span> ที่อยู่บนสุดของหน้านี้ (ถ้าขึ้นว่า Offline แล้วไม่มีปุ่มให้ทักมา) และจะปิดเองเวลา 01:00 น.'
  },
  {
    question: 'ไม่อยากให้คนเห็นว่าอยู่ที่ไหนบนแมพ ปิดได้ไหม',
    answer:
      'ถ้าไม่อยากให้คนที่ใช้ web map เห็นว่าอยู่ไหน ให้พิมพ์ `/dynmap hide` ในเกม ถ้าอยากให้เห็นเหมือนเดิมพิมพ์ `/dynmap show`'
  },
  { question: 'ทำเว็บนี้ทำไม', answer: 'why not? xd' }
]
</script>

<template>
  <section class="max-w-7xl mx-auto p-10">
    <div class="flex items-center font-semibold text-4xl text-black dark:text-white">
      <QuestionMarkCircleIcon class="hidden md:block w-28 mr-4" />
      <h2>
        Frequently Asked Questions
        <br />
        <span class="text-3xl text-neutral-600 dark:text-neutral-400">คำถามที่เจอบ่อย</span>
      </h2>
    </div>
    <div v-for="i in list" id="list" class="mt-10">
      <p
        class="mb-4 font-semibold text-lg md:text2xl dark:text-gray-100"
        v-html="marked.parse('Q: ' + i.question)"
      ></p>
      <p
        class="md:text-lg text-neutral-600 dark:text-neutral-300"
        v-html="marked.parse('A: ' + i.answer)"
      ></p>
    </div>
  </section>
</template>

<style>
#list a {
  @apply text-blue-500 dark:text-blue-400 underline underline-offset-4 decoration-2;
}
</style>
