<script setup>
import navbar from "./components/navbar.vue";
import card_work from "./components/card_work.vue";
import { onMounted, ref } from "vue";

const dataa = ref([
  {
    title: "Infomedia Nusantara: Digital Marketing Implementation",
    description: "Elevating brand awareness with a winning strategy.",
    medium_image: [
      {
        url: "https://i0.wp.com/icca.co.id/wp-content/uploads/2019/09/visit-6.jpeg?resize=720%2C528",
      },
    ],
  },
  {
    title: "BRI Manajemen Investasi | Brand Development Journey",
    description: "Providing brand communication to increase public awareness.",
    medium_image: [
      {
        url: "https://foto.kontan.co.id/gz-NuKqZoZUxaMseh3SrO1hMZQc=/640x360/smart/2025/06/04/1993759793p.jpg",
      },
    ],
  },
  {
    title: "Bank Danamon: Career Website Redesign",
    description: "Building a visually appealing website to attract top talent",
    medium_image: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEVpRnKsgJy3N6MAzYuDaldx2TqFkFo6wb7Q&s",
      },
    ],
  },
]);

onMounted(async () => {
  console.log(dataa.value);
});
</script>

<template>
  <section id="top">
    <navbar />
  </section>
  <section id="content">
    <div class="content d-flex flex-column">
      <div
        class="content-upper d-flex justify-content-start align-items-start flex-column"
        style="margin-top: 5rem;"
      >
        <h1>Our Case Studies</h1>
        <p>
          Discover inspiring success stories where our clients overcome
          challenges, leverage our expertise, and achieve remarkable results.
        </p>
      </div>
      <div
        class="content-content d-flex justify-content-center align-items-center flex-row gap-4 my-5"
      >
        <card_work v-for="(item, index) in dataa" :key="index" :data="item" />
      </div>
    </div>
  </section>
</template>
