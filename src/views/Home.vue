<template>
  <div class="home">
    <header>
      <h1>Bulmad, neh</h1>
    </header>

    <section>
      <css-doodle>
        :doodle {
          @grid: 16 / 100vw;
          overflow: hidden;
        }
        <!-- margin: -.5px; -->
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
        <h2>Bulmad, neh</h2>
      </div>
    </section>

    <section>
      <css-doodle>
        :doodle {
          @grid: 16 / 100vw;
          overflow: hidden;
        }
        <!-- margin: -.5px; -->
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
        <h2>Ikke veel</h2>
      </div>
    </section>

    <section>
      <css-doodle>
        :doodle {
          @grid: 20 / 100vmax;
          background: #0a0c27;
          font-family: sans-serif;
        }
        :after {
          content: \@hex(@r(0x2500, 0x257f));
          color: hsla(@r(360), 70%, 70%, @r(.9));
          font-size: 5vmax;
        }
      </css-doodle>
      <h2>pidu.</h2>
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
  width: 100%;
  height: 100%;
}
</style>
