export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/image-edge',
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  css: [
    '@/globalStyle.css',
    '@unocss/reset/tailwind.css',
  ],
  // build: {
  //   transpile: ['gsap'],
  // },
  colorMode: {
    classSuffix: '',
  },
})
