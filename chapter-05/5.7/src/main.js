import './server/server';
import Vue from 'vue';
import App from './App.vue';
import pinia from 'pinia';
import './style.css';

Vue.use(pinia);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
