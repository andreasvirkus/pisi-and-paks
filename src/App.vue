<template>
  <div id="app">
    <div class="text-center padded">
      <router-link to="/" class="content-link">Home</router-link> |
      <router-link to="/feed" class="content-link">Pix</router-link>
    </div>
    <main class="body-section">
      <router-view/>
    </main>
  </div>
</template>

<style src="@/styles/variables.css"></style>
<style src="@/styles/global.css"></style>
<style lang="scss">
a {
  font-weight: bold;
  color: #2D232E;
  &.router-link-exact-active {
    color: #42b983;
  }
}
.body-section {
  padding: 1rem;
  width: 96%;
  max-width: 50rem;
  margin: 1rem auto;
}
</style>
