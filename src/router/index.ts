import Vue from 'vue'
import Router from 'vue-router'
import test1 from "@/views/test/test1.vue";
import test2 from "@/views/test/test2.vue";


Vue.use(Router);

export const router = new Router({
        mode: 'history',
        routes: [
            {
                path: '/test1',
                component: test1
            },
            {
                path: '/test2',
                component: test2
            }
        ]
    })
;
