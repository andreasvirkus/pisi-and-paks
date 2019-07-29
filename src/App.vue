<template>
  <div id="app">
    <css-doodle>
      :doodle {
        @grid: 21 / 100vmax;
        --h: @rand(360);
        overflow: hidden;
      }
      :nth-child(even):after {
        content: '\27d4';
        color: hsl(
          calc(var(--h) + @rand(60)),
          70%, 70%
        );
        font-size: 2em;
        transform: rotate(@rand(360deg)) scale(1.5);
        transition: transform .2s ease-in-out;
        will-change: transform;
      }
    </css-doodle>

    <div class="headmast">
      <nav class="headmast__nav padded">
        <router-link to="/" class="content-link">pulmast</router-link> ∾
        <router-link to="/feed" class="content-link">picce</router-link> ∾
        <router-link to="/spot" class="content-link">kuhu</router-link>
      </nav>
    </div>

    <router-view/>
  </div>
</template>

<script>
let doodle = null
let doodleUpdateInterval = null

export default {
  name: 'home',
  async mounted () {
    await this.$nextTick()
    doodle = this.$el.querySelector('css-doodle')
    doodleUpdateInterval = setInterval(() => {
      doodle.update()
    }, 2000)
  },
  beforeDestroy () {
    clearInterval(doodleUpdateInterval)
  }
}
</script>
<style src="@/styles/variables.css"></style>
<style src="@/styles/global.css"></style>
<style>
css-doodle {
  position: fixed;
  z-index: -1;
  opacity: .275;
  min-height: 100vh;
}
.headmast {
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  right: 0;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-content-secondary);
  background-color: rgba(255, 255, 255, .85);
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
