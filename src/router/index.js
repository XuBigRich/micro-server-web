// src/router/index.js

import {createRouter, createWebHistory} from 'vue-router';
import homePage from '../views/store/homePage/homePage.vue';
import loginPage from '@/views/oauth/login/loginPage.vue';
import grantPage from '@/views/oauth/grant/grantPage.vue';
import orderPage from '../views/store/order/orderPage.vue';
import store from '../store';
import Layout from "@/layout";

const routes = [
    {
        path: '/login',
        component: loginPage,
    }, {
        path: '/grant',
        component: grantPage
        //按道理讲 ，整个路由信息都应该由后端提供，包含这个meta
    }, {
        path: '',
        redirect: '/index',
        component: Layout,
        meta: {requiresAuth: true},
        children: [
            {
                path: '/index',
                component: () => homePage,
                name: 'Index',
                meta: {title: '首页', icon: 'dashboard', affix: true}
            }, {
                path: '/order',
                component: () => orderPage,
                name: 'Order',
                meta: {title: '订单页面', icon: 'dashboard', affix: true}
            },
        ]
        //按道理讲 ，整个路由信息都应该由后端提供，包含这个meta

    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
//路由守卫 记录请求信息
router.beforeEach((to, from, next) => {
    // 如果用户未登录，记录原始的路由地址
    if (to.meta.requiresAuth && store.state.originalRoute != null) {
        next(store.state.originalRoute);
    } else {
        // 用户已登录，继续导航
        next();
    }
});
export default router;
