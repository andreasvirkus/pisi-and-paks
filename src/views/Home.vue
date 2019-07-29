<template>
  <div class="home">

    <section>
      <css-doodle>
        :doodle {
          @grid: 16 / 100vw;
          overflow: hidden;
        }
        margin: -.5px;
        @random { border-top: 1px solid #60569e; }
        @random { border-left: 1px solid #60569e; }
        @random(.2) {
          ::after {
            content: '';
            background: hsl(@rand(360), 60%, 70%);
            @size: @rand(20px);
            transition: background .2s ease-in-out;
          }
        }
      </css-doodle>
      <div class="text-ontop">
        <div class="text-background--faded">
          <h1>pulmad, noh.</h1>
        </div>
      </div>
    </section>

    <section>
      <css-doodle>
        :doodle {
          @grid: 16 / 100vmax;
          overflow: hidden;
        }
        @random { border-top: 1px solid #60569e; }
        @random { border-left: 1px solid #60569e; }
        @random(.2) {
          ::after {
            content: '';
            background: hsl(@rand(360), 60%, 70%);
            @size: @rand(3px);
          }
        }
      </css-doodle>
      <div class="text-ontop">
        <div class="text-background--faded">
          <p>ikke veel jahun pulmadest</p>
        </div>
      </div>
    </section>

    <section>
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
      <div class="text-ontop">
        <div class="text-background--faded">
          <p>piduu</p>
        </div>
      </div>
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
}
css-doodle {
  opacity: .275;
}
.text-ontop {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.text-background--faded {
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}
</style>
