<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView :key="$route.fullPath"/>
</template>