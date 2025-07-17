<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div
      class="navbar-content d-flex align-items-center justify-content-between"
    >
      <div class="logo">
        <router-link to="/">
          <img
            src="/suitmedia-removebg-preview.png"
            alt=""
            style="width: 150px"
            loading="lazy"
          />
        </router-link>
      </div>
      <div
        class="links d-flex align-items-start justify-content-start flex-row gap-4"
      >
        <router-link
          to="/work"
          class="nav-link d-flex align-items-center justify-content-between flex-column gap-1"
          exact-active-class="active"
          aria-current="page"
          >Work
          <hr class="active-shower" />
        </router-link>

        <router-link
          to="/about"
          class="nav-link d-flex align-items-center justify-content-between flex-column gap-1"
          exact-active-class="active"
          aria-current="page"
          >About
          <hr class="active-shower" />
        </router-link>

        <router-link
          to="/services"
          class="nav-link d-flex align-items-center justify-content-between flex-column gap-1"
          exact-active-class="active"
          aria-current="page"
          >Services
          <hr class="active-shower" />
        </router-link>

        <router-link
          to="/"
          class="nav-link d-flex align-items-center justify-content-between flex-column gap-1"
          exact-active-class="active"
          aria-current="page"
          >Ideas
          <hr class="active-shower" />
        </router-link>

        <router-link
          to="/careers"
          class="nav-link d-flex align-items-center justify-content-between flex-column gap-1"
          exact-active-class="active"
          aria-current="page"
          >Careers
          <hr class="active-shower" />
        </router-link>

        <router-link
          to="/contact"
          class="nav-link d-flex align-items-center justify-content-between flex-column gap-1"
          exact-active-class="active"
          aria-current="page"
          >Contact
          <hr class="active-shower" />
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script></script>
