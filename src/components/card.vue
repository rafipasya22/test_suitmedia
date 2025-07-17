<script setup>
const props = defineProps({
  data: Object,
  date: String
});

const date = props.data.published_at
const newdate = new Date(date)

const formatted = newdate.toLocaleDateString("id-ID", {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
</script>
<template>
    <div class="itemcard d-flex justify-content-start align-items-start flex-column">
        <div class="card-img">
            <img :src="props.data.medium_image[0]?.url" alt="">
        </div>
        <small class="date">{{ formatted }}</small>
        <p class="title">{{ data.title }}</p>
    </div>
</template>

