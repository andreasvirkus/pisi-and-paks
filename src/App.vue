<template>
  <div id="app" class="app-container">
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
        transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
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
    }, 3500)
  },
  beforeDestroy () {
    clearInterval(doodleUpdateInterval)
  }
}
</script>
<style src="@/styles/variables.css"></style>
<style src="@/styles/global.css"></style>
<style>
.app-container {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
    Cantarell, 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
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
  box-shadow: 0 10px 20px rgba(250,250,250,0.19), 0 6px 6px rgba(180,180,180,0.23);
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
