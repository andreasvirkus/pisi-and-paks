<template>
  <div class="home">
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

    <section>
      <h1>pulmad, noh.</h1>
    </section>

    <section>
      <p>ikke veel jahun pulmadest</p>
    </section>

    <section>
      <p>piduu 🎉</p>
    </section>
  </div>
</template>

<script>
let doodles = []
let doodleUpdateInterval = null

export default {
  name: 'home',
  async mounted () {
    await this.$nextTick()
    doodles = this.$el.querySelectorAll('css-doodle')
    doodleUpdateInterval = setInterval(() => {
      for (const doodle of doodles) doodle.update()
    }, 2000)
  },
  beforeDestroy () {
    clearInterval(doodleUpdateInterval)
  }
}
</script>

<style lang="scss">
section {
  position: relative;
  padding: 15rem;
  text-align: center;
  border-bottom: 1px solid;
  font-size: 2rem;
  font-weight: 200;
}
css-doodle {
  position: fixed;
  z-index: -1;
  opacity: .275;
  min-height: 100vh;
}
</style>
