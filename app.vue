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
  }, {
    name: 'charset',
    content: 'UTF-8'
  }, {
    name: 'keywords',
    content: 'spotify, youtube, mp3, download, playlist, music, song, songs, convert, converter, downloader'
  }, {
    name: 'author',
    content: 'SongBasket'
  }, {
    name: 'robots',
    content: 'index, follow'
  }, {
    name: 'googlebot',
    content: 'index, follow'
  }, {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1.0'
  }],
  link: [{
    rel: 'icon',
    href: '/favicon.ico',
    sizes: 'any'
  }, {
    rel: 'shortcut icon',
    href: '/icons/icon_256@1x.png',
    sizes: '256x256'
  }, {
    rel: 'shortcut icon',
    href: '/icons/icon_512@1x.png',
    sizes: '512x512'
  }, {
    rel: 'apple-touch-icon',
    href: '/icons/icon_256@1x.png',
    sizes: '256x256'
  }, {
  }]
})
</script>