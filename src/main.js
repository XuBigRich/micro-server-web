import {createApp} from 'vue'
import App from './App.vue'
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from './router' // 确保引入了Vue Router配置
const app = createApp(App);
app.use(router).use(store).use(ElementPlus)
app.mount('#app')

