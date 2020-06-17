<template>
  <div class="home">
    <section class="hero">
      <h1 class="contrast">pulmad?</h1>
      <svg class="hero__blob"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(300,300)">
          <path d="M50.8,-89.8C61.3,-72.4,62,-50.5,85.1,-30C108.2,-9.6,153.6,9.5,157,26.3C160.3,43.1,121.7,57.6,95.7,77.1C69.7,96.6,56.3,121.2,38.1,123.9C19.9,126.7,-3,107.5,-38.5,107.7C-74,108,-122,127.7,-152.7,118C-183.3,108.3,-196.6,69.2,-186,36.6C-175.4,3.9,-140.9,-22.3,-111.8,-36.5C-82.7,-50.6,-58.9,-52.7,-41.2,-66.7C-23.4,-80.8,-11.7,-106.9,4.2,-113.5C20.2,-120.1,40.4,-107.1,50.8,-89.8Z" fill="#222233" />
        </g>
      </svg>
    </section>

    <section class="-separated">
      <p>💒 ikke veel räägin pulmadest</p>
    </section>

    <section>
      <p>piduu 🎉</p>
    </section>
  </div>
</template>

<style lang="scss">
.-separated::after {
  // content: '~';
  content: '';
  --blog-post-divider: linear-gradient(90deg, #0ec1f6, #8823de);
  background-color: var(--blog-post-divider);
  background-image: var(--blog-post-divider);
  display: block;
  position: absolute;
  bottom: 0;
  width: 50%;
  height: 3px;
  border-radius: 8px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.hero {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  overflow: hidden;

  &__blob {
    position: absolute;
    z-index: -1;
    // transform: translate(7rem, -6rem);
  }

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    background-color: #223;
    height: 150vh;
    width: 50vw;
    transform: rotate(-45deg) translate(-60vh);
  }
  &::after {
    content: none;
  }
}
.contrast {
  color: beige;
  font-family: "SFMono-Regular", Menlo, Consolas, "Liberation Mono", Courier, monospace;
}
</style>
