<template>
  <article>
    <nav v-if="showNav">
      <a href="#ajakava">Ajakava</a>
      <a href="#asukoht">Asukoht</a>
      <a href="#menuu">Menüü</a>
      <a href="#transport-ja-oobimine">Transport</a>
      <a href="#olulised-numbrid">Kontaktid</a>
    </nav>

    <Content :class="['wrapper', showNav ? 'content' : 'feed']" />
  </article>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      showNav: false,
    }
  },
  mounted() {
    this.showNav = window.location.pathname !== '/feed.html'
  },
}
</script>
