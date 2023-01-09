<script lang="ts" setup>
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')
const container = ref<HTMLDivElement | null>(null)
const inputContent = ref<string>('')
const timeAgo = computed(() => {
  return useTimeAgo(new Date(1999, 1, 4)).value.substring(0, 2)
})
onMounted(() => {
  const mm = gsap.matchMedia()
  mm.add('(max-width: 799px)', () => {
    gsap.to('#img1', {
      scale: 1.6,
      x: 50,
      rotate: 35,
      scrollTrigger: {
        scroller: '#container',
        trigger: '#img1',
        start: 'top bottom',
        end: 'top top',
        // markers: true,
        scrub: true,
      },
    })
  })
  mm.add('(max-width: 799px)', () => {
    gsap.to('#img3', {
      scale: 1.6,
      x: -50,
      rotate: -35,
      scrollTrigger: {
        scroller: '#container',
        trigger: '#img3',
        start: 'top bottom',
        end: 'top top',
        // markers: true,
        scrub: true,
      },
    })
  })
  mm.add('(max-width: 799px)', () => {
    gsap.to('#img2', {
      scale: 1.6,
      y: -20,
      scrollTrigger: {
        scroller: '#container',
        trigger: '#img2',
        start: 'top bottom',
        end: 'top top',
        // markers: true,
        scrub: true,
      },
    })
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
      start: 'center center',
      // markers: true,
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
      // markers: true,
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
      // markers: true,
      scrub: true,
    },
  })
  gsap.to('#send', {
    autoAlpha: 0,
    scrollTrigger: {
      scroller: '#container',
      trigger: '#send',
      start: 'top center',
      end: 'bottom center',
      // markers: true,
      scrub: true,
    },
  })

  gsap.to('#textArea', {
    autoAlpha: 0,
    y: 10,
    scrollTrigger: {
      scroller: '#container',
      trigger: '#textArea',
      start: 'center center',
      end: 'top top',
      scrub: true,
    },
  })

  mm.add('(min-width:800px)', () => {
    gsap.to('#img1', {
      scale: 1.2,
      x: 150,
      rotate: 15,
      scrollTrigger: {
        scroller: '#container',
        trigger: '#img1',
        start: 'top bottom',
        end: 'top top',
        // markers: true,
        scrub: true,
      },
    })
  })
  mm.add('(min-width:800px)', () => {
    gsap.to('#img2', {
      scale: 1.2,
      y: -20,
      scrollTrigger: {
        scroller: '#container',
        trigger: '#img2',
        start: 'top bottom',
        end: 'top top',
        // markers: true,
        scrub: true,
      },
    })
  })
  mm.add('(min-width:800px)', () => {
    gsap.to('#img3', {
      scale: 1.2,
      x: -150,
      rotate: -15,
      scrollTrigger: {
        scroller: '#container',
        trigger: '#img3',
        start: 'top bottom',
        end: 'top top',
        // markers: true,
        scrub: true,
      },
    })
  })
  gsap.from('#text-box', {
    autoAlpha: 0,
    scrollTrigger: {
      scroller: '#container',
      trigger: '#text-box',
      start: 'center 80%',
      end: 'center center',
      // markers: true,
      scrub: true,
    },
  })
})
const sendMessage = async () => {
  const { data, pending, error } = await useFetch('https://api.vika.cn/fusion/v1/datasheets/dstTEbcKiyoQj0YzNg/records?viewId=viwAoGNVM4Lu3&fieldKey=name', {
    method: 'post',
    headers: { Authorization: 'Bearer uskK5FftsbXnLqrOV5DjzLY' },
    body: JSON.stringify({ records: [{ fields: { 标题: inputContent.value } }] }),
  })
}
const nextPage = () => {
  container.value?.scrollBy({ top: 10, left: 0, behavior: 'smooth' })
}
</script>

<template>
  <div id="container" ref="container" class="overflow-y-scroll h-screen snap-y snap-mandatory">
    <div>
      <section id="box1" class="flex flex-col justify-center items-center md:w-1/2 mx-auto h-screen md:p-20 h-full snap-center m-1 ">
        <heart class="h-12 mb-40" />
      </section>
      <section id="text-box" class="flex flex-col justify-center items-center md:w-1/2 mx-auto h-screen md:p-20 h-full snap-center m-1 ">
        <div class="text-center p-10 rounded-lg relative">
          <p class="text-2xl font-serif m-2">
            hi,almira
          </p>
          <p class="text-lg m-2 text-bold">
            <span>
              当1月3日的秒针转完最后一圈,意味着你已经告别粉色的23岁。<br>
              现在,你24岁了,祝你{{ timeAgo }}岁生日快乐,祝你永远快乐。
            </span>
          </p>
        </div>
      </section>
      <section class="relative flex justify-center items-center md:w-1/2 mx-auto h-screen md:p-20 h-full snap-center m-1 ">
        <div class="text-2xl">
          Some Moment
        </div>
        <nuxt-img id="img1" class="absolute shadow-lg w-24 md:w-72" src="https://s1.vika.cn/space/2023/01/05/360e5ea076a9444baacc5eca60194790?attname=A_2.webp" />
        <nuxt-img id="img2" class="absolute shadow-lg w-24 md:w-72" src="https://s1.vika.cn/space/2023/01/05/0e5c52fa300d4dc6b831571f96525c55?attname=A_3.webp" />
        <nuxt-img id="img3" class="absolute shadow-lg w-24 md:w-72" src="https://s1.vika.cn/space/2023/01/05/87b92d36f8f649a19015a16e1ee89ef8?attname=A_1.webp" />
      </section>
      <section id="box2" class="h-screen md:w-1/2 flex flex-col md:flex-row items-center justify-center mx-auto snap-start m-1 p-20">
        <div id="helloText" class="text-4xl md:text-4xl font-bold leading-14 md:leading-16">
          和23岁的自己道别<br>
          以及 <br>
          和24岁的自己问好
        </div>
        <div class="md:ml-10 md:mt-0 hover:translate-y-2 transition-all" @click="nextPage">
          <arrow id="helloArrow" class="w-20 h-20" />
        </div>
      </section>
      <section id="box3" class=" h-screen md:w-1/2 h-full flex justify-center items-center mx-auto snap-start m-1">
        <div class="relative h-1/2 w-5/6">
          <div class="absolute -top-4 pl-3 pr-3 pb-1 font-bold left-10 text-xl text-black z-20 bg-white  ">
            道别和愿景
          </div>
          <textarea id="textArea" v-model="inputContent" class="border border-black   border-2 rounded-lg p-10 h-full w-full" />
          <div id="send" class="bg-black text-white  w-full transition-all duration-300  text-center rounded" @click="sendMessage">
            我写好了
          </div>
        </div>
      </section>

      <section id="box4" class=" h-screen md:w-1/2 h-full flex justify-center items-center mx-auto snap-start m-1">
        <div class="text-2xl">
          <p>恭喜你开始24岁的人生啦</p>
          <p>
            此时此刻是:
            <span class="font-serif">
              {{ formatted }}
            </span>
          </p>
          <br>
        </div>
      </section>
    </div>
  </div>
</template>
