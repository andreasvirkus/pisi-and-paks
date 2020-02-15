<template>
  <div
    id="app"
    class="app-container"
  >
    <header
      class="header"
      :class="hovering && 'header--raised'"
    >
      <h1 class="heading-font">
        Kutse pulmapeople
      </h1>
    </header>

    <main>
      <p>Ootame sind oma pulmapeople.</p>

      <header>
        <h2 class="heading-font">
          27&bull;06&bull;2020
        </h2>
        <p>Kell 16:00 Padise kastellis Padisel.</p>
      </header>

      <p class="space-m">
        Õhtusöök disko ja elava muusikaga, <br>riietus pidulikult mugav.
      </p>

      <p>
        Oma tulekust anna teada hiljemalt <br><strong>27. aprilliks <a href="mailto:johannaeenma@gmail.com">johannaeenma@gmail.com</a></strong>,
        <br>öeldes selge sõnaga <q>jah</q>.
      </p>

      <p>Oleme väga tänulikud kingi eest, <br>mis mahub ümbrikusse.</p>

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
.header {
  display: inline-block;
  position: absolute;
  top: 33%;
  left: 100px;
  transform: rotate(90deg);
  // top: -20%;
  // background-color: #eaf6fe;
  // padding: 8rem 4rem;
  // background-color: rgba(234, 246, 254, 0.7);
  // transform-origin: 20px 330px;
  transition: transform 0.3s ease-out;
  white-space: pre;

  &::after {
    // content: '';
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

  @media screen and (max-width: 40rem) {
    opacity: 0.2;
    left: 70px;
    top: 45%;
  }
}
// .header:hover,
// .header--raised {
//   transform: rotate(25deg);
// }
main {
  padding: 20vh 2rem;
  max-width: 30rem;
  width: 96%;

  & > * + * {
    margin-top: 1.5rem;
  }

  header {
    margin-top: 3rem
  }
  header p {
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

  svg {
    height: 1.45rem;
    vertical-align: middle;
  }
}

.space-m {
  margin-top: 2.5rem;
}
</style>
