import {createStore} from 'vuex';

export default createStore({
    state: {
        token: '', // 用户token
        navState: '/', // 导航状态
        bannerType: 'website', // Banner类型
        edbMenus: [], // 菜单数据
        rootMenuId: 0,
        outState: 'normal', // 正常退出
        userInfo: {}, // 账号个人信息
        mainSchoolId: '', // 教师端学校id
        loading: false, // 学校端loading
        isMicroModeToken: '', // 子应用token
        buttonLoading: false // 按钮加载
    },
    getters: {},
    mutations: {
        USER_TOKEN(state, payload) {
            state.token = payload;
        },
        NAV_STATE(state, payload) {
            state.navState = payload;
        },
        BANNER_TYPE(state, payload) {
            state.bannerType = payload;
        },
        EDB_MENUS(state, payload) {
            state.edbMenus = payload;
        },
        SET_ROOTMENUID(state, payload) {
            state.rootMenuId = payload;
        },
        SET_USERINFO(state, payload) {
            state.userInfo = payload;
            // state.mainSchoolId = payload?.userLoginInfo?.user?.mainSchoolId;
            state.mainSchoolId = payload?.subjectCode;
        },
        SET_LOADING(state, payload) {
            state.loading = payload;
        },
        SET_ISMICROMODE_TOKEN(state, payload) {
            state.isMicroModeToken = payload;
        },
        SET_OUTSTATE(state, payload) {
            state.outState = payload;
        },
        SET_BUTTONLOADING(state, payload) {
            state.buttonLoading = payload;
        }
    },
    actions: {},
    modules: {}
});
