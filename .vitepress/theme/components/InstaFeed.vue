<template>
  <div class="slider">
    <transition name="slide" mode="out-in" appear>
      <video-player
        v-if="slide.is_video"
        :key="sliderIndex"
        :poster="slide.display_url"
        :shortcode="slide.shortcode"
        @end="showNext"
      />
      <img v-else :key="sliderIndex" :src="slide.display_url" :alt="slide.accessibility_caption" />
    </transition>

    <ul v-if="false && media.length">
      <li v-for="({ node }, i) in media" :key="i">
        <a :href="`https://instagram.com/p/${node.shortcode}`" rel="noopener noreferrer nofollow">
          <video-player
            v-if="node.is_video"
            :poster="node.display_url"
            :shortcode="node.shortcode"
          />
          <img v-else :src="node.thumbnail_src" :alt="node.accessibility_caption" />
          <div>
            <time :datetime="new Date(node.taken_at_timestamp)">
              {{ relativeTime(node.taken_at_timestamp) }}
            </time>
            | 🖤 {{ node.edge_liked_by.count }}
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import VideoPlayer from './VideoPlayer.vue'

function relativeTime(previous) {
  if (!previous) return ''
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
  name: 'ImageFeed',
  components: { VideoPlayer },
  data() {
    return {
      media: [],
      sliderIndex: 0,
      tag: 'paksjapisi',
      debug: false,
    }
  },
  computed: {
    slide() {
      return (this.media[this.sliderIndex] || {}).node || {}
    },
  },
  async mounted() {
    await this.refreshFeed()
    this.scheduleNextSlide()
  },
  methods: {
    async refreshFeed() {
      const query = new URLSearchParams(location.search)
      this.tag = query.get('tag') || 'paksjapisi'

      const { graphql } = await fetch(
        `https://www.instagram.com/explore/tags/${this.tag}/?__a=1`,
      ).then((r) => r.json())
      if (!graphql) return []

      // TODO: Fetch all pages
      this.media = graphql.hashtag.edge_hashtag_to_media.edges
      console.info('Fetched hashtag media', this.media)
    },
    async showNext() {
      if (this.media.length - this.sliderIndex < 4) this.refreshFeed()

      if (this.sliderIndex + 1 >= this.media.length) this.sliderIndex = 0
      else this.sliderIndex++

      await this.$nextTick()
      if (!this.slide.is_video) this.scheduleNextSlide()
    },
    scheduleNextSlide() {
      clearTimeout(carouselTimeout)
      carouselTimeout = setTimeout(() => this.showNext(), 4000)
    },
    relativeTime,
  },
}
</script>

<style>
.slider {
  width: 100%;
  text-align: center;
}
.slider ul {
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 293px));
  justify-content: center;
  grid-gap: 28px;
  list-style: none;
  margin: 3rem 0;
  padding: 0;
}
.slider img,
.slider video {
  width: 100%;
  height: 98%;
  object-fit: contain;
  border-radius: 6px;
}
.slider a {
  display: block;
  text-decoration: none;
  background-color: white;
  border: 4px solid transparent;
  border-bottom: 12px solid transparent;
}
.slider a:hover {
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
  border-color: white;
}

.slide-enter-active,
.slide-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-enter {
  opacity: 0;
  transform: translateX(2em);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-2em);
}
</style>
