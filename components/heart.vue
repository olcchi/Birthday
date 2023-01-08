<script lang="ts" setup>
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
    <img :src="svgSrc" alt="">
  </div>
</template>
