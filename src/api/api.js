import request from './utils/request';
// import qs from 'qs';

/* 接口 */
export const demo = data =>
    request({
        url: '/demo',
        method: 'post',
        data
    });
// 登陆
export const login = (data) => {
    request({
        url: '/user/login',
        method: 'post',
        data
    });
}

export const removeLogin = () => {
    request({
        url: '/user/logout',
        method: 'get',
    });
}
