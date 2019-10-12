<template>
  <div id="app" class="app-container">
    <div class="headmast" v-show="false">
      <nav class="headmast__nav padded">
        <router-link to="/" class="content-link">pulm</router-link> ∾
        <router-link to="/feed" class="content-link">pilt</router-link> ∾
        <router-link to="/spot" class="content-link">koht</router-link>
      </nav>
    </div>

    <router-view/>
  </div>
</template>

<style src="@/styles/variables.css"></style>
<style src="@/styles/global.css"></style>
<style>
.app-container {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
    Cantarell, 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
.headmast {
  position: sticky;
  z-index: 5;
  top: 0;
  left: 0;
  right: 0;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-content-secondary);
  background-color: rgba(255, 255, 255, .85);
  box-shadow: 0 6px 6px rgba(180,180,180,0.23);
}
.headmast__nav {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  max-width: 40rem;
}
section {
  position: relative;
  padding: 15rem 0;
  text-align: center;
  font-size: 2rem;
  font-weight: 200;
  color: #363651;
}
</style>
