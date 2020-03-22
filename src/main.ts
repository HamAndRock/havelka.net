import Vue from 'vue'

import {router} from '@/router'
import App from "./views/App.vue";
import i18n from './i18n'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.config.productionTip = false;
Vue.use(VueObserveVisibility);


import 'bootstrap';


export class DataPlatform {
    constructor(selector: string) {
        new Vue({
            router,
            i18n,
            render: (createElement) => createElement(App),

        }).$mount(selector)
    }
}

new DataPlatform('#app');
