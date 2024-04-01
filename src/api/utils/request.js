import axios from 'axios';
import router from '../../router';
import {ElMessage} from 'element-plus';
import store from '../../store';

const service = axios.create({
    baseURL: "http://127.0.0.1:8080",
    timeout: 1000 * 60,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },

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
            config.headers.Authorization = "bearer " + localStorage.getItem('CLOUD-AFTER-CLASS-TOKEN');
        }
        config.withCredentials = true;
        return config;
    },
    error => {
        console.log(error)
        return Promise.reject(error);
    }
);

// 响应拦截器， 路由跳转 是先请求，再跳转， 所以 拦截器 会先执行， 路由守卫后执行
service.interceptors.response.use(
    res => {
        console.log("记录：" + res)
        if ([401, 406].includes(res.data.code) || ['401', '403'].includes(res.data.data)) {
            // sessionStorage.clear(); // 接用户中心时慎用
            // localStorage.clear(); // 接用户中心时慎用
            store.commit('setOriginalRoute', router.currentRoute.fullPath);
            ElMessage.error(res.data.msg ? res.data.msg : '登录失效');
            router.push('/');
            return Promise.reject();
        } else {
            store.commit('setOriginalRoute', null);
            return Promise.resolve(res.data);
        }
    },
    error => {
        console.log("记录err：" + error.request.status)
        if ([401, 406].includes(error.request.status) || ['401', '403'].includes(error.request.status)) {
            console.log("进入判断",error.response.data.error)
            // sessionStorage.clear(); // 接用户中心时慎用
            // localStorage.clear(); // 接用户中心时慎用
            // store.commit('setOriginalRoute', router.currentRoute.fullPath);
            // ElMessage.error(error.request.data ? error.request.data : '登录失效');
            ElMessage.error(error.response.data.error);
            // router.push('/');
            console.log("弹窗")
            return Promise.reject();
        }
        return Promise.reject(error);
    }
);

export default service;
