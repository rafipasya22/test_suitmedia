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
const datainit = ref([]);
const page = ref(1);
const totalpage = ref(5);

const sortparam = ref("published_at");

async function getdatainit() {
  try {
    const response = await axios.get(
      `https://suitmedia-backend.suitdev.com/api/ideas?page[size]=100&append[]=small_image&append[]=medium_image&sort=-published_at`
    );
    datainit.value = response.data.data;
    totalpage.value = datainit.value.length / optiontextitems.value;
  } catch (error) {
    console.error("Gagal mengambil data:", error);
  }
}

async function changePage(pagetarget = 1){
  try {
    sortparam.value =
      optiontextsort.value === "Oldest" ? "published_at" : "-published_at";
    const response = await axios.get(
      `https://suitmedia-backend.suitdev.com/api/ideas?page[number]=${pagetarget}&page[size]=${optiontextitems.value}&append[]=small_image&append[]=medium_image&sort=${sortparam.value}`
    );
    dataa.value = response.data.data;
    page.value = pagetarget;
    console.log(dataa.value[0].title);
  } catch (error) {
    console.error("Gagal mengambil data:", error);
  }
};

async function getdata() {
  try {
    sortparam.value =
      optiontextsort.value === "Oldest" ? "published_at" : "-published_at";
    const response = await axios.get(
      `https://suitmedia-backend.suitdev.com/api/ideas?page[number]=${page.value}&page[size]=${optiontextitems.value}&append[]=small_image&append[]=medium_image&sort=${sortparam.value}`
    );
    dataa.value = response.data.data;
    console.log(dataa.value[0].title);
  } catch (error) {
    console.error("Gagal mengambil data:", error);
  }
}

onMounted(async () => {
  const page_hist = localStorage.getItem("page");
  const sort_hist = localStorage.getItem("optiontextsort");
  const item_hist = localStorage.getItem("optiontextitems");
  if (page_hist) page.value = Number(page_hist);
  if (sort_hist) optiontextsort.value = sort_hist;
  if (item_hist) optiontextitems.value = item_hist;
  await getdatainit();
  await getdata();
  console.log(dataa.value);
  console.log("totalpage", totalpage.value);
});

watch([optiontextitems, optiontextsort], () => {
  getdata();
  getdatainit();
});

watch(page, () => {
  localStorage.setItem("page", page.value);
});

watch(optiontextsort, () => {
  localStorage.setItem("optiontextsort", optiontextsort.value);
});

watch(optiontextitems, () => {
  localStorage.setItem("optiontextitems", optiontextitems.value);
});
</script>

<template>
  <section id="top">
    <navbar />
    <banner />
  </section>
  <section id="content">
    <div class="content d-flex flex-column">
      <div
        class="content-upper d-flex justify-content-between align-items-center flex-row"
      >
        <div class="info">
          <small
            >Showing 1 - {{ optiontextitems }} of
            {{ datainit.length }} items</small
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
        v-for="i in Math.ceil(Number(optiontextitems) / 4)"
        :key="i"
      >
        <card
          v-for="(item, index) in dataa.slice((i - 1) * 4, i * 4)"
          :key="index"
          :data="item"
        />
      </div>
      <div
        class="content-bottom d-flex justify-content-center align-items-center flex-row"
      >
        <pagination
          :totalPages="totalpage"
          :current-page="page"
          @page-changed="changePage"
        />
      </div>
    </div>
  </section>
</template>
