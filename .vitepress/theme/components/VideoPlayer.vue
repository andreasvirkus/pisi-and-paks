<template>
  <video autoplay="autoplay" loop :poster="poster">
    <source v-if="url" :src="url" />
  </video>
</template>

<script>
export default {
  name: 'VideoPlayer',
  data() {
    return {
      url: '',
    }
  },
  props: {
    poster: String,
    shortcode: String,
  },
  async mounted() {
    const { graphql } = await fetch(
      `https://www.instagram.com/p/${this.shortcode}/?__a=1`,
    ).then((r) => r.json())

    console.info('video object', graphql)
    this.url = graphql.shortcode_media.video_url
  },
}
</script>

<style scoped>
section {
  padding: 2rem;
  text-align: center;
}
.about__couple-pic {
  max-height: 12rem;
}
ul {
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 293px));
  justify-content: center;
  grid-gap: 28px;
  list-style: none;
  margin: 0;
  padding: 0;
}
img,
video {
  width: auto;
  max-width: 100%;
}
a {
  display: block;
  text-decoration: none;
  background-color: white;
  border: 4px solid transparent;
  border-bottom: 12px solid transparent;
}
a:hover {
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
  border-color: white;
}
</style>
