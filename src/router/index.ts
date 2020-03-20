import Vue from 'vue'
import Router from 'vue-router'
import Profile from "@/views/profile/Profile.vue";


Vue.use(Router);

export const router = new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                component: Profile
            }
        ]
    })
;
