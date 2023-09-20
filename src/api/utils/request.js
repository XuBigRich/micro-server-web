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

// 响应拦截器
service.interceptors.response.use(
    res => {
        if ([401, 406].includes(res.data.code)) {
            // sessionStorage.clear(); // 接用户中心时慎用
            // localStorage.clear(); // 接用户中心时慎用
            ElMessage.error(res.data.msg ? res.data.msg : '登录失效');
            router.push('/');
            return Promise.reject();
        } else if (res.data.code === 200) {
            return Promise.resolve(res.data);
        } else {
            /*
             *401未授权,403授权过期,404资源未找到
             * */
            if (['401', '403'].includes(res.data.data)) {
                if (localStorage['roles'] !== 'teacher') {
                    localStorage['CLOUD-AFTER-CLASS-TOKEN'] = '';
                    localStorage['userAccount'] = '';
                    localStorage['roles'] = '';
                    store.commit('SET_OUTSTATE', '!normal'); // 异常退出
                    location.reload();
                }
            }
            return Promise.reject(res.data);
        }
    },
    error => {
        return Promise.reject(error);
    }
);

export default service;
