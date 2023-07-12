<template>
  <Metas />
  <div class="app-container df global-center full" :class="{ warping }">
    <div class="block-container text-center df fldc global-center fade-in" :class="{ hidden }">
      <h1>SongBasket</h1>
      <a class="abs hidden-link" :href="downloadUrl">Download Songbasket</a>
      <button @click="goToDownload">
        Download
      </button>
    </div>
  </div>
</template>

<script>
import Metas from './Metas.vue'
export default {
  name: 'App',
  components: {
    Metas
  },
  data () {
    return {
      hidden: true,
      warping: false,
      downloadUrl: 'http://download.songbasket.com'
    }
  },
  mounted () {
    setTimeout(this.show, 1000)
  },
  methods: {
    async goToDownload () {
      this.warping = true
      await this.hide()
      window.location.href = this.downloadUrl
      // await this.show()
      // this.warping = false
    },
    show () {
      return new Promise((resolve, reject) => {
        this.hidden = false
        setTimeout(resolve, 3000)
      })
    },
    hide () {
      return new Promise((resolve, reject) => {
        this.hidden = true
        setTimeout(resolve, 2500)
      })
    }
  }
}
</script>

<style lang="scss">
@import '../styles/main';
</style>
<style lang="less" scoped>
.app-container {
  transition: background-color 2s var(--bezier-round-inverted);

  &.warping {
    background-color: #fff;
  }
}

.on() {
  opacity: 1;
  transform: scale(1);
}

.off() {
  opacity: 0;
  transform: scale(.9);
}

.hidden-link {
  opacity: 0;
  pointer-events: none;
}

.block-container {
  @transition: 3s var(--bezier-chill);
  transition: opacity @transition, transform @transition;

  &.hidden {
    transition-timing-function: var(--bezier-round-inverted);
    transition-duration: .5s;
    .off();
  }
}

h1 {
  font-size: 3em;
  margin-bottom: .2em;
}

@media (max-width: 450px) {
  h1 {
    font-size: 16vw;
  }

  button {
    font-size: 5vw;
  }
}</style>