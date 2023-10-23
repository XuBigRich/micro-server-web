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
//订单列表
export const orderList = () =>
    console.log("获取订单列表")
    request({
        url: '/order/getOrderList',
        method: 'get',
    });
