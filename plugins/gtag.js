import Vue from 'vue';
import VueGtag from 'vue-gtag';

export default ({ app }) => {
  Vue.use(VueGtag, {
    config: { id: 'G-7H85CDY9Z4' },
    appName: 'powehi',
  }, app.router);
}