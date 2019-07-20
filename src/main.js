import Vue from 'vue'
import App from './App.vue'
import './assets/app.css'
import router from './router'
import VeeValidate from 'vee-validate';
import {VueMasonryPlugin} from 'vue-masonry';
import PrettyCheckbox from 'pretty-checkbox-vue';
import * as uiv from 'uiv'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import i18n from '@/lang/i18n';
import Lightbox from 'vue-easy-lightbox'

Vue.use(Lightbox)

library.add(faSearch)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(uiv)

Vue.config.productionTip = false
Vue.use(VeeValidate,{
  validity: true,
  events: ''
});

Vue.use(VueMasonryPlugin);
Vue.use(PrettyCheckbox);
new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
