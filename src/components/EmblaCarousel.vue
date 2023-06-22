<script setup lang="ts">
import useEmblaCarousel, { type EmblaCarouselType } from 'embla-carousel-vue';
import { onMounted, ref } from 'vue';

import img1 from '@/assets/carousel/view_1.webp';
import img2 from '@/assets/carousel/view_2.webp';
import img3 from '@/assets/carousel/view_3.webp';
import img4 from '@/assets/carousel/view_4.webp';
import img5 from '@/assets/carousel/view_5.webp';
// import {
//   DotButton,
//   PrevButton,
//   NextButton,
// } from './EmblaCarouselArrowsDotsButtons'
const imageUrls = [img1, img2, img3, img4, img5];

const [emblaRef, emblaApi] = useEmblaCarousel({
  loop: true,
});
const selectedIndex = ref(0);
const scrollSnaps = ref<number[]>([]);

const onInit = (emblaApi: EmblaCarouselType) => {
  scrollSnaps.value = emblaApi.scrollSnapList();
};

const onSelect = (emblaApi: EmblaCarouselType) => {
  selectedIndex.value = emblaApi.selectedScrollSnap();
  //   setPrevBtnEnabled(emblaApi.canScrollPrev())
  //   setNextBtnEnabled(emblaApi.canScrollNext())
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

  onInit(emblaApi.value);
  onSelect(emblaApi.value);
  emblaApi.value.on('reInit', onInit);
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
          <div class="embla__slide__number">
            <span>{{ i + 1 }}</span>
          </div>
          <img class="embla__slide__img rounded-lg" :src="image" alt="Your alt text" />
        </div>
      </div>
    </div>

    <!-- <PrevButton onClick="{scrollPrev}" enabled="{prevBtnEnabled}" />
    <NextButton onClick="{scrollNext}" enabled="{nextBtnEnabled}" /> -->

    <div class="embla__dots bottom-0">
      <button
        v-for="(_, index) in scrollSnaps"
        :key="index"
        class="flex items-center w-8 h-8 mx-2 after:w-full after:h-1 after:bg-white after:rounded-full touch-manipulation"
        :class="{
          'after:bg-gradient-to-r from-pink-400 to-fuchsia-500': index === selectedIndex,
        }"
        type="button"
        @click="
          () => {
            clearScrollInterval();
            emblaApi?.scrollTo(index);
            setScrollInterval();
          }
        "
      />
    </div>
  </div>

  <!-- <div class="embla__dots">
    {scrollSnaps.map((_, index) => ( <DotButton key={index} selected={index===selectedIndex}
    onClick={()=> scrollTo(index)} /> ))}
  </div> -->
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
.embla__slide__number > span {
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
/* .embla__dot {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  margin-right: 0.75rem;
  margin-left: 0.75rem;
} */
.embla__dot:after {
  /* background: var(--background-site); */
  border-radius: 0.2rem;
  width: 100%;
  height: 0.25rem;
  content: '';
}
/* .embla__dot--selected:after {
  background: linear-gradient(45deg, var(--brand-primary), var(--brand-secondary));
} */
.embla__button {
  z-index: 1;
  color: var(--background-site);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 4rem;
  height: 4rem;
}
.embla__button--prev {
  left: 1.6rem;
}
.embla__button--next {
  right: 1.6rem;
}
.embla__button:disabled {
  opacity: 0.3;
}
.embla__button__svg {
  width: 65%;
  height: 65%;
}
</style>
