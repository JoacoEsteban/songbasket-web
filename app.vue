<template>
  <div class="full">
    <Gtm />
    <NuxtPage />
  </div>
</template>

<style lang="scss">
@import 'assets/styles/main';
</style>

<script setup lang="ts">
useHead({
  title: 'SongBasket',
  meta: [{
    name: 'description',
    content: 'SongBasket, The all in one solution to turn Spotify playlists into MP3'
  },
  {
    name: 'charset',
    content: 'UTF-8'
  },
  {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1.0'
  }]
})
</script>