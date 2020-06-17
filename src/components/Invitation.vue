<template>
  <header class="header" :class="hovering && 'header--raised'">
    <h1 class="heading-font">Kutse pulmapeople</h1>
  </header>

  <main>
    <p>Ootame sind oma pulmapeople.</p>

    <header>
      <h2 class="heading-font">27&bull;06&bull;2020</h2>
      <p>Kell 16:00 Padise kastellis Padisel.</p>
    </header>

    <p class="space-m">
      Õhtusöök disko ja elava muusikaga,
      <br />riietus pidulikult mugav.
    </p>

    <p>
      Oma tulekust anna teada hiljemalt
      <br />
      <strong>
        5. juuniks
        <a href="mailto:johannaeenma@gmail.com">johannaeenma@gmail.com</a>
      </strong>,
      <br />öeldes selge sõnaga
      <q>jah</q>.
    </p>

    <p>
      Oleme väga tänulikud kingi eest,
      <br />mis mahub ümbrikusse.
    </p>

    <footer class="heading-font text-center">
      Kristjan
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.81 13.66">
        <path
          d="M14.04 6.6c-.88.82-3.31 1.28-3.52 1.67-.61 1.13-3.49 4.83-6.97 4.83C.98 13.1.26 11.99.57 9.52.8 7.71 3.35 5.47 4.85 4.48 5.48 2.61 5.89 1.93 7.75 1c.56-.27 1.69-.35 2.3-.35.58 0 .78.53.72 1.07-.04.27-.29 1.05-.66 1.05-.54 0-.33-.86-.56-1.23-.23-.35-.93-.31-1.5-.19-1.05.23-1.72 1.5-1.83 2.24l.43-.08c.27-.02.54-.21.81-.21.66 0 .6.54.53 1.03-.04.4-.12.64-.47.91-.35.29-1.26.66-1.69.66-.23 0-.72-.27-.82-.47-.06-.06-.1-.52-.17-.49-.76.5-3.06 2.54-3.29 4.27-.06.45-.06.86-.02 1.23-.04.37.02.72.29 1.01.37.64 1.05 1.03 2.24 1.03.37 0 1.07-.1 1.42-.19 1.65-.47 2.7-1.81 3.7-3.21.12-.17.27-.58.29-.8.02-.14-.32-.12-.37-.12-.25 0-3.99-.14-4.16 1.23-.05.34.11.58.48.58l.04-.02c.1-.43.08-.66.37-.66.12 0 .33.12.29.39-.06.45-.49.84-.93.84-.6 0-1.19-.16-1.09-.93.12-.84 1.6-1.52 2.28-1.71.67-.21 2.15-.38 2.83-.38.17 0 .37 0 .58-.02.27-.12.25-.51.7-.51.54 0 .37 0 .33.43C12.1 7.15 13 6.99 13.86 6c.45-.49.49-.86.19-1.11-.21-.16-.6.35-.84.35-.17 0-.29.04-.27-.14.08-.54 1.28-.93 1.75-.93.51 0 .72.1.64.64-.07.63-.82 1.35-1.29 1.79zM7.15 3.84c-.33 0-1.09.53-1.13.88-.02.17.04.42.26.42.29 0 1.09-.6 1.13-.92.01-.2-.05-.38-.26-.38z"
          fill="#1d1d1b"
        />
      </svg>Johanna
    </footer>
  </main>
</template>

<script>
export default {
  name: 'Invitation',
  data() {
    return {
      hovering: false,
    }
  },
}
</script>

<style>
.heading-font {
  font-family: 'buena-park-jf', serif;
}
.header {
  display: inline-block;
  position: absolute;
  top: 33%;
  left: 100px;
  transform: rotate(90deg);
  transition: transform 0.3s ease-out;
  white-space: pre;
}
.header::after {
  /* content: ''; */
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
  .header {
    display: none;
  }
}

/* .header:hover,
.header--raised {
  transform: rotate(25deg);
}  */

main {
  padding: 20vh 2rem;
  max-width: 30rem;
  width: 96%;
}
@media screen and (max-width: 40rem) {
  main {
    padding-top: 10vh;
  }
}
main > * + * {
  margin-top: 1.5rem;
}

header {
  margin-top: 3rem;
}
header p {
  margin-top: 1rem;
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
  font-size: 15px;
}
q {
  quotes: '“' '”' '‘' '’';
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
footer svg {
  height: 1.45rem;
  vertical-align: middle;
}

.space-m {
  margin-top: 2.5rem;
}
</style>
