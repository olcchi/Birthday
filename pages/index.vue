<script lang="ts" setup>
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')
const count = ref(0)
const { pause, resume } = useRafFn(() => {
  count.value += 100
})
watch(count, () => {
  if (count.value >= 100000)
    pause()
})
onMounted(() => {
  gsap.from('#box2', {
    scrollTrigger: {
      scroller: '#container',
      trigger: '#box2',
      toggleActions: 'restart none none none',
    },
    autoAlpha: 0,
    duration: 3,
  })
  gsap.from('#box3', {
    scrollTrigger: {
      scroller: '#container',
      trigger: '#box3',
      toggleActions: 'restart none none none',
    },
    autoAlpha: 0,
    duration: 3,
  })
  gsap.from('#box4', {
    scrollTrigger: {
      scroller: '#container',
      trigger: '#box4',
      toggleActions: 'restart none none none',
    },
    autoAlpha: 0,
    duration: 3,
  })
  const tl = gsap.timeline()
  const tl2 = gsap.timeline()
  tl.from('#box1', {
    autoAlpha: 0,
    duration: 0.7,
    translateY: -100,
  })
  tl2.from('#nav-wrapper', {
    autoAlpha: 0,
    duration: 0.7,
    translateY: -100,
  })
  resume()
})
</script>

<template>
  <nav id="nav-wrapper" class="z-50 m-2 p-2 fixed w-4/5 left-1/10 flex justify-start drop-shadow-sm bg-white/30 backdrop-blur-lg dark:bg-transparent">
    <div class="font-serif text-2xl p-2 dark:text-white">
      Love Book
    </div>
  </nav>
  <div id="container" class="overflow-y-scroll h-screen snap-y snap-mandatory">
    <div>
      <section id="box1" class="grid grid-cols-8 h-screen w-1/2 h-full flex flex-col justify-center  mx-auto snap-center m-1 scroll-mt-5">
        <p class="text-6xl font-serif m-2">
          hi,almira
        </p>
        <p class="text-base m-2">
          此时此刻是: <span class="font-serif">
            {{ formatted }}
          </span>
          <br>
          当你看到这段话时我们已经一起踏入了2023年,我们已经在一起了
        </p>
        <div class="bg-black text-white m-2 p-1 w-24 text-center rounded hover:font-medium transition-all ease-in-out duration-100">
          <span>
            continue
          </span>
        </div>
      </section>
      <section id="box2" class="h-screen h-4/5 md:w-1/2 h-full flex flex-col justify-center mx-auto snap-start m-1 scroll-mt-5">
        <div>hi</div>
      </section>
      <section id="box3" class=" h-screen h-4/5 md:w-1/2 h-full flex flex-col justify-center mx-auto snap-start m-1 scroll-mt-5">
        <p class="text-4xl font-serif m-2">
          hi,almira
        </p>
        <p class="text-lg m-2">
          当你看到这段话时我们已经一起踏入了2023年
        </p>
      </section>
      <section id="box4" class=" h-screen h-4/5 md:w-1/2  h-full flex flex-col justify-center mx-auto snap-start m-1 scroll-mt-5">
        <p class="text-4xl font-serif m-2">
          hi,almira
        </p>
        <p class="text-lg m-2">
          当你看到这段话时我们已经一起踏入了2023年
        </p>
      </section>
    </div>
  </div>
</template>
