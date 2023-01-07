<script lang="ts" setup>
import { count } from 'console'

const current = ref<number>(1)
const counter = useInterval(120)
const svgSrc = ref('')
watch(counter, () => {
  if (counter.value > 40)
    counter.value = 1
  current.value = counter.value
  svgSrc.value = `/heart/${current.value}.svg`
})
</script>

<template>
  <div>
    <img ref="img2" :src="svgSrc" alt="">
  </div>
</template>
