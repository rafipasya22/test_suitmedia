<template>
  <ul class="pageination d-flex align-items-center flex-row">
    <li class="page-item" :class="{ disabled: currentPage === 1 }">
      <button
        class="page-link-change"
        @click="changePage(1)"
        :disabled="currentPage === 1"
      >
        &laquo;
      </button>
    </li>

    <li class="page-item" :class="{ disabled: currentPage === 1 }">
      <button
        class="page-link-change"
        @click="changePage(currentPage - 1)"
        :disabled="currentPage === 1"
      >
        &lsaquo;
      </button>
    </li>
    <li v-for="page in totalPages" :key="page" class="page-item">
      <button
        class="page-link number"
        :class="{ active: page === currentPage }"
        @click="changePage(page)"
      >
        {{ page }}
      </button>
    </li>
    <li class="page-item" :class="{ disabled: currentPage === totalPages }">
      <button
        class="page-link-change"
        @click="changePage(currentPage + 1)"
        :disabled="currentPage === totalPages"
      >
        &rsaquo;
      </button>
    </li>

    <li class="page-item" :class="{ disabled: currentPage === totalPages }">
      <button
        class="page-link-change"
        @click="changePage(totalPages)"
        :disabled="currentPage === totalPages"
      >
        &raquo;
      </button>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  totalPages: Number,
  currentPage: Number,
});
</script>
