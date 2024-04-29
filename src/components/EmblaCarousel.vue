<script setup lang="ts">
import useEmblaCarousel, { type EmblaCarouselVueType } from 'embla-carousel-vue';
import { onMounted, ref, type UnwrapRef } from 'vue';

import img1 from '@/assets/carousel/view_1.webp';
import img2 from '@/assets/carousel/view_2.webp';
import img3 from '@/assets/carousel/view_3.webp';
import img4 from '@/assets/carousel/view_4.webp';
import img5 from '@/assets/carousel/view_5.webp';

const imageUrls = [img1, img2, img3, img4, img5];

const [emblaRef, emblaApi] = useEmblaCarousel({
  loop: true,
});
const selectedIndex = ref(0);

const onSelect = (emblaApi: UnwrapRef<EmblaCarouselVueType[1]>) => {
  selectedIndex.value = emblaApi?.selectedScrollSnap() || 0;
};

let scrollInterval: number;
const setScrollInterval = () => {
  scrollInterval = setInterval(() => {
    emblaApi.value?.scrollNext();
  }, 3000);
};
const clearScrollInterval = () => {
  clearInterval(scrollInterval);
};

onMounted(() => {
  if (!emblaApi.value) return;

  onSelect(emblaApi.value);
  emblaApi.value.on('reInit', onSelect);
  emblaApi.value.on('select', onSelect);

  emblaApi.value.on('pointerDown', clearScrollInterval);
  emblaApi.value.on('pointerUp', setScrollInterval);
  setScrollInterval();
});
</script>

<template>
  <div class="relative">
    <div class="embla__viewport" ref="emblaRef">
      <div class="embla__container">
        <div v-for="(image, i) in imageUrls" class="embla__slide" :key="i">
          <img class="embla__slide__img rounded-lg" :src="image" alt="Your alt text" />
        </div>
      </div>
    </div>

    <div class="embla__dots bottom-0">
      <button v-for="(_, index) in imageUrls" :key="index"
        class="flex items-center px-2 py-3 mx-2 after:w-2 after:h-2 after:bg-white after:rounded-full touch-manipulation"
        :class="{
          'after:bg-gradient-to-r from-pink-400 to-fuchsia-500': index === selectedIndex,
        }" type="button" @click="() => {
  clearScrollInterval();
  emblaApi?.scrollTo(index);
  setScrollInterval();
}
  " />
    </div>
  </div>
</template>

<style scoped>
* {
  --slide-spacing: 1rem;
  --slide-size: 100%;
}

.embla__viewport {
  overflow: hidden;
}

.embla__container {
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y;
  flex-direction: row;
  height: auto;
  margin-left: calc(var(--slide-spacing) * -1);
}

.embla__slide {
  flex: 0 0 var(--slide-size);
  min-width: 0;
  padding-left: var(--slide-spacing);
  position: relative;
}

.embla__slide__img {
  display: block;
  height: var(--slide-height);
  width: 100%;
  object-fit: cover;
}

.embla__slide__number {
  width: 4.6rem;
  height: 4.6rem;
  z-index: 1;
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  border-radius: 50%;
  background-color: rgba(var(--background-site-rgb-value), 0.85);
  line-height: 4.6rem;
  font-weight: 900;
  text-align: center;
  pointer-events: none;
}

.embla__slide__number>span {
  color: var(--brand-primary);
  background-image: linear-gradient(45deg, var(--brand-primary), var(--brand-secondary));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.6rem;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.embla__dot,
.embla__button {
  -webkit-appearance: none;
  background-color: transparent;
  touch-action: manipulation;
  display: inline-flex;
  text-decoration: none;
  cursor: pointer;
  border: 0;
  padding: 0;
  margin: 0;
}

.embla__dots {
  z-index: 1;
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
