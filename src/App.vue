<template>
  <div id="app">
    <div class="text-center padded">
      <router-link to="/" class="content-link">Home</router-link> |
      <router-link to="/feed" class="content-link">Pix</router-link> |
      <router-link to="/spot" class="content-link">Location</router-link>
    </div>
    <main class="body-section">
      <router-view/>
    </main>
  </div>
</template>

<style src="@/styles/variables.css"></style>
<style src="@/styles/global.css"></style>
<style lang="scss">
.body-section {
  padding: 1rem;
  width: 96%;
  max-width: 50rem;
  margin: 1rem auto;
}
</style>
