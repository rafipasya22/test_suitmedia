<script setup>
const props = defineProps({
  data: Object,
});
</script>
<template>
  <div
    class="itemcard work d-flex justify-content-start align-items-start flex-column"
  >
    <div class="card-img">
      <img :src="props.data.medium_image[0]?.url" alt="" loading="lazy" />
    </div>
    <p class="title">{{ data.title }}</p>
    <small class="date">{{ data.description }}</small>
  </div>
</template>
