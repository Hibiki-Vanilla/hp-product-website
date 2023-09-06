import Vue from 'vue';
import VueGtag from 'vue-gtag';

export default ({ app }) => {
  Vue.use(VueGtag, {
    config: { id: 'G-F0LCXV95KK' },
    appName: 'gabriel',
  }, app.router);
}