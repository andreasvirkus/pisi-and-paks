<template>
  <div class="home">
    <section>
      <h1>👰 pulmad, noh.</h1>
    </section>

    <section>
      <p>💒 ikke veel räägin pulmadest</p>
    </section>

    <section>
      <p>piduu 🎉</p>
    </section>
  </div>
</template>

<style lang="scss">
.home section:not(:last-child)::after {
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
</style>
