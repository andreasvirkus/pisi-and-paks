<template>
  <div id="app">
    <div class="text-center padded">
      <router-link to="/" class="content-link">Home</router-link> |
      <router-link to="/feed" class="content-link">Pix</router-link> |
      <router-link to="/spot" class="content-link">Location</router-link>
    </div>

    <router-view/>
  </div>
</template>

<style src="@/styles/variables.css"></style>
<style src="@/styles/global.css"></style>
