import Vue from 'vue'

import {router} from '@/router';
import App from "./views/App.vue";

Vue.config.productionTip = false;



export class DataPlatform {
    constructor(selector: string) {
        new Vue({
            router,
            render: (createElement) => createElement(App),
        }).$mount(selector)
    }
}

new DataPlatform('#app');
