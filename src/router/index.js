// src/router/index.js

import {createRouter, createWebHistory} from 'vue-router';
import homePage from '../views/homePage/homePage.vue';
import loginPage from '../views/login/loginPage.vue';
import orderPage from '../views/order/orderPage.vue';
import store from '../store';
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
        component: orderPage,
        //按道理讲 ，整个路由信息都应该由后端提供，包含这个meta
        meta: {requiresAuth: true}
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
//路由守卫 记录请求信息
router.beforeEach((to, from, next) => {
    // 如果用户未登录，记录原始的路由地址
    if (store.state.originalRoute != null) {
        next(store.state.originalRoute);
    } else {
        // 用户已登录，继续导航
        next();
    }
});

export default router;
