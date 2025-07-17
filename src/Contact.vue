<script setup>
import navbar from "./components/navbar.vue";
</script>

<template>
  <section id="top">
    <navbar />
  </section>
  <section id="content">
    <div class="content d-flex flex-column">
      <div
        class="content-upper d-flex justify-content-between align-items-start flex-column"
      >
        <h1>Let's Talk About Business</h1>
        <form
          class="d-flex justify-content-start align-items-start flex-column"
          style="width: 100%"
        >
          <div class="mb-3" style="width: 100%;">
            <label for="Email" class="form-label">Email address</label>
            <input
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3" style="width: 100%;">
            <label for="Message" class="form-label">Message</label>
            <textarea
              class="form-control"
              maxlength="10000"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" class="submitbtn">Submit</button>
        </form>
      </div>
      <div
        class="content-content d-flex justify-content-center align-items-center flex-row gap-4 mt-5"
      ></div>
    </div>
  </section>
</template>
