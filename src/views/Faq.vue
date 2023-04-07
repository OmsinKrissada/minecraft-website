<script setup lang="ts">
import {
  FolderArrowDownIcon,
  MapIcon,
  ComputerDesktopIcon,
  DeviceTabletIcon,
  DevicePhoneMobileIcon,
  QuestionMarkCircleIcon
} from '@heroicons/vue/24/outline'
import '@lottiefiles/lottie-player'

const list: { question: string; answer: string }[] = [
  {
    question: 'ใช้เวอร์ชันอะไรเข้าได้บ้าง',
    answer:
      'ถ้าเป็น Java เข้าได้ตั้งแต่ 1.9 ขึ้นไป ส่วน Bedrock ไม่การันตีแต่ใช้เวอร์ชันล่าสุดได้แน่นอน โดยที่ตัวเซิฟจะรันเป็นเวอร์ชันที่ระบุใน "Native Version" บนหน้าหลัก'
  },
  {
    question: 'เล่นในมือถือ/iPad เข้าได้ไหม',
    answer:
      'เข้าได้ ใช้ IP เดียวกันได้เลย port เป็น 19132 (default) แต่ก็ต้องบอกไว้ก่อนว่า mechanic เป็น Java นะ เช่น craft เรือไม่ใช้ shovel'
  },
  {
    question: 'เปิดทั้งวันไหม',
    answer: 'แล้วแต่ว่าช่วงนั้นๆคนเล่นเยอะไหม ตอนนี้เปิด 09:30 ถึง 01:30 ของทุกวัน'
  },
  {
    question: 'ไม่อยากให้คนเห็นว่าอยู่ที่ไหนบนแมพ ปิดได้ไหม',
    answer:
      'ถ้าไม่อยากให้คนที่ใช้ web map เห็นว่าอยู่ไหน ให้พิมพ์ "/dynmap hide" ในเกม ถ้าอยากให้เห็นเหมือนเดิมพิมพ์ "/dynmap show"'
  },
  { question: 'ทำเว็ปนี้ทำไม', answer: 'why not? xd' }
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
    <div v-for="i in list" class="mt-10">
      <p class="mb-4 text-lg md:text-2xl dark:text-gray-100">Q: {{ i.question }}</p>
      <p class="font-medium md:text-xl text-neutral-600 dark:text-neutral-400">A: {{ i.answer }}</p>
    </div>
  </section>
</template>
