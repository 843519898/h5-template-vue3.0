import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.ts'
// 移动端rem适配
import 'lib-flexible/flexible.js'

// 引入全局样式
import '@/assets/css/index.scss'

// 解决移动端2倍屏幕 border问题
import '@/assets/css/border.css'
// 标签样式初始化
import '@/assets/css/resets.css'
// 解决移动端点击时间延迟问题
import '@/assets/js/common.js';
// 按需引入vant
import { vantPlugins } from '@/vant/'
const app = createApp(App)
import { Toast, Dialog, Notify } from 'vant';

// 将 Toast 等组件注册到 app 上
app.use(Toast);


// 通过use 将 路由插件安装到 app 中
app.use(router)
app.use(store)
app.use(vantPlugins)
app.mount('#app')