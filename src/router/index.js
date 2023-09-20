// src/router/index.js

import {createRouter, createWebHistory} from 'vue-router';
import homePage from '../views/homePage/homePage.vue';
import loginPage from '../views/login/loginPage.vue';
import orderPage from '../views/order/orderPage.vue';

const routes = [
    {
        path: '/',
        redirect: '/home', // 重定向到默认路由
    },
    {
        path: '/home',
        component: homePage,
    },
    {
        path: '/login',
        component: loginPage,
    },
    {
        path: '/order',
        component: orderPage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
