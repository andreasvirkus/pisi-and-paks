<template>
  <section class="about">
    <h1>Here's where the happy-haps will go down</h1>
    <p class="m-top-m">Find your way to a lovely mõis at X</p>

    <house-icon class="about__icon"/>
  </section>
</template>

<script>
import HouseIcon from '@/assets/house.svg'

export default {
  name: 'spot',
  components: { HouseIcon }
}
</script>

<style>
  .about__icon {
    max-height: 18rem;
  }
</style>
