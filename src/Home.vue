<script setup>
import navbar from "./components/navbar.vue";
import banner from "./components/banner.vue";
import card from "./components/card.vue";
import pagination from "./components/pagination.vue";
import { ref, onMounted, watch } from "vue";
import axios from "axios";

let optiontextsort = ref("Newest");
let optiontextitems = ref("10");

const selectitems = (text) => {
  optiontextitems.value = text;
};

const selectoption = (text) => {
  optiontextsort.value = text;
};

const dataa = ref([]);

const getdata = async () => {
  try {
    const response = await axios.get('/api/ideas', {
      params: {
        'page[number]': 1,
        'page[size]': 10,
        append: ['small_image', 'medium_image'],
        sort: '-published_at'
      }
    })
    dataa.value = response.data.data
  } catch (error) {
    console.error("Gagal mengambil data:", error)
  }
}

onMounted(async () => {
  await getdata();
  console.log(dataa.value);
});

watch(optiontextitems, () => {
  getdata();
});
</script>

<template>
  <navbar />
  <banner />
  <div class="content d-flex flex-column">
    <div
      class="content-upper d-flex justify-content-between align-items-center flex-row"
    >
      <div class="info">
        <small
          >Showing 1-{{ dataa.length }} of {{ optiontextitems }} items</small
        >
      </div>
      <div
        class="sorty d-flex justify-content-start align-items-center flex-row gap-4"
      >
        <div
          class="jumlahitem d-flex justify-content-start align-items-center flex-row gap-2"
        >
          <small>Show per page: </small>
          <div class="dropdown">
            <button
              class="dropbtn d-flex justify-content-between align-items-center flex-row"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ optiontextitems }}
              <span class="material-symbols-outlined"> arrow_drop_down </span>
            </button>
            <ul class="dropdown-menu">
              <li>
                <a
                  @click.prevent="selectitems('10')"
                  class="dropdown-item"
                  href="#"
                  >10</a
                >
              </li>
              <li>
                <a
                  @click.prevent="selectitems('20')"
                  class="dropdown-item"
                  href="#"
                  >20</a
                >
              </li>
              <li>
                <a
                  @click.prevent="selectitems('50')"
                  class="dropdown-item"
                  href="#"
                  >50</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div
          class="sorty-item d-flex justify-content-start align-items-center flex-row gap-2"
        >
          <small>Sort by: </small>
          <div class="dropdown">
            <button
              class="dropbtn d-flex justify-content-between align-items-center flex-row"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ optiontextsort }}
              <span class="material-symbols-outlined"> arrow_drop_down </span>
            </button>
            <ul class="dropdown-menu">
              <li>
                <a
                  @click.prevent="selectoption('Newest')"
                  class="dropdown-item"
                  href="#"
                  >Newest</a
                >
              </li>
              <li>
                <a
                  @click.prevent="selectoption('Oldest')"
                  class="dropdown-item"
                  href="#"
                  >Oldest</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div
      class="content-content d-flex justify-content-center align-items-center flex-row gap-4 mt-5"
      v-for="i in 3"
      :key="i"
    >
      <card
        v-for="(item, index) in dataa.slice(0, 4)"
        :key="index"
        :data="item"
      />
    </div>
    <div
      class="content-bottom d-flex justify-content-center align-items-center flex-row"
    >
      <pagination :totalPages="5" :current-page="1" />
    </div>
  </div>
</template>
