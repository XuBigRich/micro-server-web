import {createApp} from 'vue'
import App from './App.vue'
import store from './store';
import router from './router' // 确保引入了Vue Router配置
const app = createApp(App);
app.use(router).use(store)
app.mount('#app')

