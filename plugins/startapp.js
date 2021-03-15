import Vue from 'vue'

export default ({ app: { store } }) => {
  Vue.prototype.$socket = require('socket.io-client')(store.state.baseUrl)
  console.log('startapp...')

  window.onNuxtReady(() => {
    console.log('Nuxt ready...')
    store.dispatch('chain/init')
    store.dispatch('init')

    if (process.env.isDev) {
      const VConsole = require('vconsole')
      Vue.prototype.$vConsole = new VConsole()
    }
  })
}
