import {createStore} from 'vuex';

export default createStore({
    state: {
        token: '', // 用户token
        mutations: null
    },
    getters: {},
    mutations: {
        USER_TOKEN(state, payload) {
            state.token = payload;
        },
        setOriginalRoute(state, route) {
            state.originalRoute = route;
        },
    },
    actions: {},
    modules: {}
});
