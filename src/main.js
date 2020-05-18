import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import { Auth0Plugin } from "./auth";

Vue.use(Auth0Plugin, {
  domain: process.env.VUE_APP_AUTH0_DOMAIN,
  clientId: process.env.VUE_APP_AUTH0_CLIENTID,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl ?
      appState.targetUrl :
      window.location.pathname
    );
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')