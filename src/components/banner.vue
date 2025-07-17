<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const parallaxText = ref(null)

const handleScroll = () => {
  const scrollY = window.scrollY
  if (parallaxText.value) {
    parallaxText.value.style.transform = `translateY(${scrollY * 0.4}px)`
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="banner">
    <img
      src="/ide.jpg"
      loading="lazy"
      alt="banner"
      class="banner-img"
    />
    <div
      ref="parallaxText"
      class="banner-text d-flex justify-content-center align-items-center flex-column gap-0"
    >
      <p>Ideas</p>
      <small>Where all our great things begin</small>
    </div>
  </div>
</template>