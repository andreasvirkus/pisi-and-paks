<template>
  <video autoplay="autoplay" muted @ended="$emit('end')">
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

    this.url = graphql.shortcode_media.video_url
  },
}
</script>

<style scoped>
video {
  width: auto;
  max-width: 100%;
}
</style>
