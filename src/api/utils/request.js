import axios from 'axios';
import router from '../../router';
import {ElMessage} from 'element-plus';
import store from '../../store';

const service = axios.create({
    timeout: 1000 * 60,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    baseURL: "http://127.0.0.1:8080"
});

// 请求拦截器
service.interceptors.request.use(
    config => {
        if (config.headers.isMicroMode) {
            //  如果是子应用换取token
            return config;
        }
        // 请求头添加token
        if (localStorage.getItem('CLOUD-AFTER-CLASS-TOKEN')) {
            config.headers.Authorization = localStorage.getItem('CLOUD-AFTER-CLASS-TOKEN');
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截器， 路由跳转 是先请求，再跳转， 所以 拦截器 会先执行， 路由守卫后执行
service.interceptors.response.use(
    res => {
        if ([401, 406].includes(res.data.code)||['401', '403'].includes(res.data.data)) {
            // sessionStorage.clear(); // 接用户中心时慎用
            // localStorage.clear(); // 接用户中心时慎用
            router.app.$options.store.commit('setOriginalRoute', router.currentRoute.fullPath);
            ElMessage.error(res.data.msg ? res.data.msg : '登录失效');
            router.push('/');
            return Promise.reject();
        } else {
            store.commit('setOriginalRoute', null);
            return Promise.resolve(res.data);
        }
    },
    error => {
        return Promise.reject(error);
    }
);

export default service;
