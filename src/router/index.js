import Vue from 'vue';
import Router from 'vue-router';
import path from 'path';

// const resolve = (name) => {
//     path.reso
// }
Vue.use(Router);

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                name: 'index',
                path: '/index',
                component: () => System.import('../pages/Index/index.vue')
            },
            {
                name: 'about',
                path: '/about',
                component: () => System.import('../pages/About/index.vue')
            },
            {
                name: 'detail',
                path: '/detail',
                component: () => System.import('../pages/Detail/index.vue')
            }
        ]
    });
}