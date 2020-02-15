<template>
  <div
    id="app"
    class="app-container"
  >
    <header :class="hovering && 'header--raised'">
      <h1 class="heading-font">
        Kutse pulmapeople
      </h1>
    </header>

    <main
      @mouseover="hovering = true"
      @mouseleave="hovering = false"
    >
      <p>Ootame sind oma pulmapeople.</p>

      <h2 class="heading-font">
        27&bull;06&bull;2020
      </h2>

      <p>Kell 16:00 Padise kastellis Padisel.</p>

      <p class="space-m">
        Õhtusöök disko ja elava muusikaga, riietus pidulikult mugav.
      </p>

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
  components: { AmpersandIcon },
  data () {
    return {
      hovering: false
    }
  }
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
  background: transparent url("https://www.toptal.com/designers/subtlepatterns/patterns/seamless_paper_texture.png") repeat scroll 0% 0%;
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
  position: relative;
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
  top: -20%;
  left: 0;
  background-color: rgba(234, 246, 254, 0.7);
  padding: 8rem 4rem;
  transform: rotate(90deg);
  transform-origin: 20px 330px;
  transition: transform 0.3s ease-out;
  white-space: pre;

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0.75rem;
    left: 0.75rem;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    border: 2px solid #daa520;
    background-color: #e9e7de;
  }
}
header:hover,
.header--raised {
  transform: rotate(25deg);
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
footer {
  margin-top: 4rem;
}

svg {
  height: 1.45rem;
  vertical-align: middle;
}
</style>
