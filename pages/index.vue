<script lang="ts" setup>
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')
const count = ref(0)
const { pause, resume } = useRafFn(() => {
  count.value += 100
})
const timeAgo = computed(() => {
  return useTimeAgo(new Date(1999, 1, 4)).value.substring(0, 2)
})
watch(count, () => {
  if (count.value >= 100000)
    pause()
})
onMounted(() => {
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
  tl.from('#box1', {
    autoAlpha: 0,
    duration: 0.7,
    translateY: -100,
  })
  gsap.to('#helloText', {
    autoAlpha: 0,
    y: -50,
    scrollTrigger: {
      scroller: '#container',
      trigger: '#helloText',
      start: 'center center',
      end: 'bottom top',
      scrub: true,
      markers: true,
    },
  })
  gsap.to('#helloArrow', {
    autoAlpha: 0,
    y: 50,
    scrollTrigger: {
      scroller: '#container',
      trigger: '#helloArrow',
      start: 'top center',
      end: 'top top',
      markers: true,
      scrub: true,
    },
  })
  gsap.to('#textArea', {
    autoAlpha: 0,
    y: 10,
    duration: 2,
    scrollTrigger: {
      scroller: '#container',
      trigger: '#textArea',
      start: 'center center',
      end: 'top top',
      scrub: true,
    },
  })
  resume()
})
</script>

<template>
  <!-- <nav id="nav-wrapper" class="z-50 m-2 p-2 fixed w-4/5 left-1/10 flex justify-start drop-shadow-sm bg-white/30 backdrop-blur-lg dark:bg-transparent">
    <div class="font-serif text-2xl p-2 dark:text-white">
      Love Book
    </div>
  </nav> -->
  <div id="container" class="overflow-y-scroll h-screen snap-y snap-mandatory">
    <div>
      <section id="box1" class="flex justify-center items-center md:w-1/2 mx-auto h-screen md:p-20 h-full snap-center m-1 ">
        <div class="text-center p-10 rounded-lg relative">
          <div class="absolute -top-12 md:-left-8  text-16 -rotate-25">
            🎂
          </div>
          <p class="text-2xl font-serif m-2 dark:text-black">
            hi,almira
          </p>
          <p class="text-lg m-2 text-bold dark:text-black">
            <!-- 此时此刻是: <span class="font-serif">
              {{ formatted }}
            </span>
            <br> -->
            <span class="dark:text-black">
              当1月3日的秒针转完最后一圈,意味着你已经告别粉色的23岁。<br>
              现在,你24岁了,祝你{{ timeAgo }}岁生日快乐,祝你永远快乐。
            </span>
          </p>
          <div class="bg-black text-white m-2 p-1 text-center rounded hover:font-medium transition-all ease-in-out duration-100 mx-auto">
            <span>
              打开生日礼物
            </span>
          </div>
        </div>
      </section>

      <section id="box2" class="h-screen md:w-1/2 flex flex-col md:flex-row items-center justify-center mx-auto snap-start m-1 p-20">
        <div id="helloText" class="text-4xl md:text-4xl font-bold leading-14 md:leading-16">
          和23岁的自己道别<br>
          以及 <br>
          和24岁的自己问好
        </div>
        <div class="md:ml-10 md:mt-0 hover:translate-y-2 transition-all">
          <!-- <i id="helloArrow" class="i-carbon-arrow-down cursor-pointer p-5 md:p-10" @click="nextPage" /> -->
          <arrow id="helloArrow" class="w-20 h-20" />
        </div>
      </section>

      <section id="box3" class=" h-screen md:w-1/2 h-full flex justify-center items-center mx-auto snap-start m-1">
        <div class="relative h-1/2 w-5/6">
          <div class="absolute -top-4 pl-3 pr-3 pb-1 font-bold left-10 text-xl text-black z-20 bg-white dark:bg-black dark:text-white">
            道别和愿景
          </div>
          <textarea id="textArea" class="border border-black dark:border-white dark:bg-black border-2 rounded-lg p-10 h-full w-full" />
          <div class="bg-black text-white dark:bg-white w-23 hover:w-full transition-all duration-300 dark:text-black text-center rounded">
            我写好了
          </div>
        </div>
      </section>

      <section id="box3" class=" h-screen md:w-1/2 h-full flex justify-center items-center mx-auto snap-start m-1">
        <div class="text-4xl">
          此时此刻是: <span class="font-serif">
            {{ formatted }}
          </span>
          <br>
        </div>
      </section>
    </div>
  </div>
</template>
