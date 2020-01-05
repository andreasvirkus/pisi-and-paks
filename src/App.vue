<template>
  <div id="app" class="app-container">
    <!-- <nav class="headmast__nav padded">
      <a href="/" class="content-link">pulm</a> ∾
      <a href="/feed" class="content-link">pilt</a> ∾
      <a href="/spot" class="content-link">koht</a>
    </nav> -->

    <section class="coming-soon-section">
      <h1 class="heading-font">27&bull;06&bull;2020</h1>
      <h2 class="heading-font">Kristjan & <ampersand-icon /> Johanna</h2>
    </section>
  </div>
</template>

<script>
import { AmpersandIcon } from '@/assets/ampersand.svg'

export default {
  name: 'app',
  components: { AmpersandIcon }
}
</script>

<style src="@/styles/variables.css"></style>
<style src="@/styles/global.css"></style>
<style lang="scss">
.app-container {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: 'anonymous-pro', monospace;
  background-color: #eaf6fe;
}
.heading-font {
  font-family: 'buena-park-jf', serif;
}
.coming-soon-section {
  h1 {
    font-size: 3.25rem;
  }
  h2 {
    display: block;
    margin-top: 2.5rem;
    font-size: 1.875rem;
  }
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
  background-color: rgba(255, 255, 255, 0.85);
  box-shadow: 0 6px 6px rgba(180, 180, 180, 0.23);
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
