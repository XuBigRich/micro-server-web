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
    return request({
        url: '/user/login',
        method: 'post',
        data
    });
}
//退出登陆
export const removeLogin = () => {
    return request({
        url: '/user/logout',
        method: 'get',
    });
}
// getToken 这个方法 是(token) => {}
export const getToken = (token) => {
    return request({
        url: '/auth/authToken',
        method: 'get',
        params: {
            code: token
        }
    });
}
//订单列表  orderList直接就是这个方法 所以无需返回值
export const orderList = () =>
    request({
        url: '/order/getOrderList',
        method: 'get',
    });
//下单
export const order = (orderInfo) => {
    return request({
        url: '/business/business/dubbo/buy',
        method: 'post',
        data: orderInfo
    });
}
