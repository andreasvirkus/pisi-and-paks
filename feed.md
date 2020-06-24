---
title: 'Pildud 📸'
---

<div class="feed">
  <h1>#paksjapisi</h1>

  <image-feed />
</div>

<script>
import ImageFeed from './.vitepress/theme/components/InstaFeed.vue'

export default {
  name: 'Feed',
  components: { ImageFeed },
}
</script>

<style lang="postcss">
.feed {
  display: grid;
  grid-auto-rows: auto 1fr;
  grid-gap: 24px;
  text-align: center;
  height: 100vh;
  background: #111;
  color: white;
}
.feed h1 {
  font-size: 2.5rem;
  margin: 0;
}
.feed img, .feed video {
  margin-bottom: auto;
}
</style>
