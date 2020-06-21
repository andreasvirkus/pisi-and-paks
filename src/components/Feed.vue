<template>
  <section>
    <h1>
      <kbd>#{{ tag }}</kbd>
    </h1>

    <ul>
      <li v-for="({ node }, i) in media" :key="i">
        <video v-if="node.is_video" autoplay loop>
          <source :src="node.display_url" />
        </video>
        <img v-else :src="node.thumbnail_src" :alt="node.accessibility_caption" />

        <div>
          <time :datetime="new Date(node.taken_at_timestamp)">
            {{ relativeTime(node.taken_at_timestamp) }}
          </time>
          | 🖤 {{ node.edge_liked_by.count }}
        </div>
        <!-- <pre>{{ node }}</pre> -->
      </li>
    </ul>
  </section>
</template>

<script>
function relativeTime(previous) {
  const current = new Date()
  previous = new Date(previous * 1000)
  const msPerMinute = 60 * 1000
  const msPerHour = msPerMinute * 60
  const msPerDay = msPerHour * 24
  const msPerMonth = msPerDay * 30
  const msPerYear = msPerDay * 365

  const elapsed = current - previous
  if (elapsed < msPerMinute) return Math.round(elapsed / 1000) + ' seconds ago'
  if (elapsed < msPerHour) return Math.round(elapsed / msPerMinute) + ' minutes ago'
  if (elapsed < msPerDay) return Math.round(elapsed / msPerHour) + ' hours ago'
  if (elapsed < msPerMonth) return Math.round(elapsed / msPerDay) + ' days ago'
  if (elapsed < msPerYear) return Math.round(elapsed / msPerMonth) + ' months ago'
  return Math.round(elapsed / msPerYear) + ' years ago'
}

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
    ).then((r) => r.json())
    console.info('fetch response', graphql)
    if (!graphql) return

    this.media = graphql.hashtag.edge_hashtag_to_media.edges
    console.info('Fetched hashtag media', this.media)
  },
  methods: {
    relativeTime,
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
img {
  width: auto;
  max-width: 100%;
}
</style>
