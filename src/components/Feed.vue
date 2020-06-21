<template>
  <section>
    <h1>
      <kbd>#{{ tag }}</kbd>
    </h1>

    <img
      class="m-top-m about__couple-pic"
      src="https://assets-ouch.icons8.com/preview/604/01633b68-ce75-40e5-b820-0fde48dbbb7b.png"
    />

    <p>IG Feed 👇</p>
    <ul>
      <li v-for="({ node }, i) in media" :key="i">
        <video v-if="node.is_video" autoplay loop>
          <source :src="node.display_url" />
        </video>
        <img v-else :src="node.display_url" :alt="node.accessibility_caption" />

        <div>
          Taken
          <time>{{ node.taken_at_timestamp }}</time> (TODO: relative time)
        </div>
        <pre>{{ node }}</pre>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Feed',
  data() {
    const query = new URLSearchParams(location.search)
    const tag = query.get('tag')
    return {
      media: [],
      tag: tag || 'paksjapisi',
    }
  },
  async created() {
    const { graphql } = await fetch(
      `https://www.instagram.com/explore/tags/${this.tag}/?__a=1`,
    ).then((r) => r.json)
    console.info('fetch response', graphql)
    if (!graphql) return

    this.media = graphql.hashtag.edge_hashtag_to_media.edges
    console.info('Fetched hashtag media', this.media)
  },
}
</script>

<style>
section {
  padding: 2rem;
}
.about__couple-pic {
  max-height: 12rem;
}
</style>
