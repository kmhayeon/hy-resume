import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import vuescroll from 'vuescroll/dist/vuescroll-native';

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

Vue.use(vuescroll);
