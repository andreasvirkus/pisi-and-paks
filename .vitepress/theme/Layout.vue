<template>
  <article>
    <nav>
      <a href="#ajakava">Ajakava</a>
      <a href="#asukoht">Asukoht</a>
      <a href="#menuu">Menüü</a>
      <a href="#transport-ja-oobimine">Transport</a>
      <a href="#olulised-numbrid">Kontaktid</a>
    </nav>

    <main>
      <Content />
    </main>
  </article>
</template>

<style>
article {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
}

nav {
  position: sticky;
  top: 0;
  display: grid;
  grid-auto-flow: row;
  padding: 4rem;
  position: sticky;
  align-self: flex-start;
  top: 0;
}

.maps-link {
  display: flex;
  align-items: center;
}
.header-anchor {
  display: none;
}

@media screen and (max-width: 40rem) {
  article {
    flex-direction: column;
  }

  nav {
    grid-auto-flow: column;
    padding: 0.5rem;
    gap: 0.5rem;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(2px);
  }
}
</style>
