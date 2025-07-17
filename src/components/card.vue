<script setup>
import { computed } from 'vue';

const props = defineProps({
  data: Object,
  date: String
});

const formatted = computed(() => {
  if (!props.data?.published_at) return '';
  const newdate = new Date(props.data.published_at);
  return newdate.toLocaleDateString("id-ID", {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
});
</script>
<template>
    <div class="itemcard d-flex justify-content-start align-items-start flex-column">
        <div class="card-img">
            <img :src="props.data.medium_image[0]?.url" alt="" loading="lazy">
        </div>
        <small class="date">{{ formatted }}</small>
        <p class="title">{{ data.title }}</p>
    </div>
</template>

