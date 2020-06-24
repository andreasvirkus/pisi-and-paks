<section>
  <h1>
    <kbd>#{{ tag }}</kbd>
  </h1>

  <ul>
    <li v-for="({ node }, i) in media" :key="i">
      <a :href="`https://instagram.com/p/${node.shortcode}`" rel="noopener noreferrer nofollow">
        <video-player v-if="node.is_video" :poster="node.display_url" :shortcode="node.shortcode" />
        <img v-else :src="node.thumbnail_src" :alt="node.accessibility_caption">
        <div>
          <time :datetime="new Date(node.taken_at_timestamp)">
            {{ relativeTime(node.taken_at_timestamp) }}
          </time>
          | 🖤 {{ node.edge_liked_by.count }}
        </div>
      </a>
    </li>

  </ul>

</section>

<script>
import VideoPlayer from './.vitepress/theme/components/VideoPlayer.vue'

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

let carouselTimeout

export default {
  name: 'Feed',
  components: { VideoPlayer },
  data() {
    return {
      media: [],
      displayIndex: 0,
      tag: 'paksjapisi',
    }
  },
  async mounted() {
    const query = new URLSearchParams(location.search)
    this.tag = query.get('tag') || 'paksjapisi'

    const { graphql } = await fetch(
      `https://www.instagram.com/explore/tags/${this.tag}/?__a=1`,
    ).then((r) => r.json())
    console.info('fetch response', graphql)
    if (!graphql) return

    this.media = graphql.hashtag.edge_hashtag_to_media.edges
    console.info('Fetched hashtag media', this.media)
  },
  methods: {
    async getVideoUrl(code) {
      const { graphql } = await fetch(`https://www.instagram.com/p/${code}/?__a=1`)
        .then((r) => r.json())

      console.info('video object', graphql)
      return graphql.shortcode_media.video_url
    },
    showNext() {
      this.displayIndex++
      clearTimeout(carouselTimeout)
      carouselTimeout = setTimeout(() => this.showNext(), 3000)
    },
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
