import Vue from 'vue';
import App from './client/App.vue';
import VueRouter from 'vue-router';
import { routes } from './client/routes';
Vue.config.productionTip = false;
import { store } from './client/store/';
import {Vuelidate} from 'vuelidate';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuelidate);
export const eventBus = new Vue();

const router = new VueRouter({ routes, mode: 'history' });

new Vue({
  router,
  render: h => h(App),
  store,
}).$mount('#app');
