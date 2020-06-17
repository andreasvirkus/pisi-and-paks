<template>
  <Feed v-if="showFeed" />
  <Invitation v-else />
</template>

<script>
import Feed from './components/Feed.vue'
import Invitation from './components/Invitation.vue'

export default {
  name: 'App',
  components: {
    Feed,
    Invitation,
  },
  data() {
    return {
      showFeed: location.pathname === '/feed',
    }
  },
}
</script>
