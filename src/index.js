import Vue from 'vue'
import 'regenerator-runtime/runtime'
import App from './components/App.vue'

new Vue({
  components: {
    App
  },
  render: h => h(App),
  template: `
  <div>
    dale man
    <App/>
  </div>
  `
}).$mount('#app')
