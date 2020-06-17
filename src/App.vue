<template>
  <component :is="activeView" />
</template>

<script>
import Feed from './components/Feed.vue'
import Spot from './components/Spot.vue'
import Invitation from './components/Invitation.vue'

const routes = {
  '/feed': Feed,
  '/spot': Spot,
  '/': Invitation,
}

export default {
  name: 'App',
  components: {
    Feed,
    Spot,
    Invitation,
  },
  data() {
    return {
      activeView: routes[location.pathname] || routes['/'],
    }
  },
}
</script>
