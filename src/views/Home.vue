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
          }
        }
      </css-doodle>
      <div class="text-ontop">
        <h1>Bulmad, neh</h1>
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
      <div class="text-ontop color-white">
        <h2>Ikke veel</h2>
      </div>
    </section>

    <section>
      <css-doodle>
        :doodle {
          @grid: 20 / 100vmax;
          background: #0a0c27;
          font-family: sans-serif;
          @grid: 16 / 100vmax;
          overflow: hidden;
        }
        :after {
          content: \@hex(@r(0x2500, 0x257f));
          color: hsla(@r(360), 70%, 70%, @r(.9));
          font-size: 5vmax;
        }
      </css-doodle>
      <div class="text-ontop">
        <p>piduu</p>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
section {
  position: relative;
}
.text-ontop {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
