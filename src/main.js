import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css' //https://cdn.materialdesignicons.com/5.0.45/
Vue.config.productionTip = false
import Vue2Filters from "vue2-filters";
import { imageUrl } from "@/services/constants";
import { resumeUrl } from "@/services/constants";

Vue.use(Vue2Filters);

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')

import VueFriendlyIframe from 'vue-friendly-iframe';
Vue.use(VueFriendlyIframe);
import JsonExcel from "vue-json-excel"
Vue.component("dowloadExcel", JsonExcel)

Vue.filter("formatDate", function(value) {
    if (value) {
        return moment(value).format("ddd, ll")
    }
});

Vue.filter("imageUrl", function(image) {
    return `${imageUrl}/${image}?timestamp=${Date.now()}`;
});


Vue.filter("resumeUrl", function(resume) {
    return `${resumeUrl}/${resume}`;
});