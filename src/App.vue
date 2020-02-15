<template>
  <div
    id="app"
    class="app-container"
  >
    <header>
      <h1 class="heading-font">
        Kutse pulmapeople
      </h1>
    </header>

    <main>
      <p>Ootame sind oma pulmapeople.</p>

      <h2 class="heading-font">
        27&bull;06&bull;2020
      </h2>

      <p>Kell 16:00 Padise kastellis Padisel.</p>

      <p>Õhtusöök disko ja elava muusikaga, riietus pidulikult mugav.</p>

      <p>Oma tulekust anna teada hiljemalt <br><strong>27. aprilliks <a href="mailto:johannaeenma@gmail.com">johannaeenma@gmail.com</a></strong>, öeldes selge sõnaga <q>jah</q>.</p>

      <p>Oleme väga tänulikud kingi eest, mis mahub ümbrikusse.</p>

      <footer class="heading-font text-center">
        Kristjan <ampersand-icon /> Johanna
      </footer>
    </main>
  </div>
</template>

<script>
import AmpersandIcon from '@/assets/ampersand.svg'

export default {
  name: 'App',
  components: { AmpersandIcon }
}
</script>

<style lang="scss">
/* Handicraft reset */
*,
*::before,
*::after {
  box-sizing: inherit;
}
html {
  box-sizing: border-box;
}
body {
  min-height: 100vh;
  background: rgba(0, 0, 0, 0) url("https://www.toptal.com/designers/subtlepatterns/patterns/seamless_paper_texture.png") repeat scroll 0% 0%;
}
body,
body * {
  margin: 0;
  padding: 0;
}
body,
button,
input,
textarea {
  font-family: 'anonymous-pro', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app-container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.heading-font {
  font-family: 'buena-park-jf', serif;
}
header {
  // background-color: #eaf6fe;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: rgba(234, 246, 254, 0.7);
  padding: 6rem 4rem;
  transform: rotate(90deg);
  transform-origin: top left;
  transition: transform 0.3s ease-out;

  &:hover {
    transform: rotate(0);
  }
}
main {
  padding: 20vh 5vw;
  max-width: 30rem;
  width: 96%;

  & > * + * {
    margin-top: 1rem;
  }
}

a {
  color: inherit;
}

h1 {
  font-size: 3.6rem;
}
h2 {
  font-size: 2rem;
}
p {
  font-size: 16px;
}
q {
  quotes: "“" "”" "‘" "’";
}
q:before {
    content: open-quote;
}
q:after {
    content: close-quote;
}

svg {
  height: 1rem;
}
</style>
