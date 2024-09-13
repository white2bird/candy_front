import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//  这玩意是个全局初始化文件
createApp(App).use(router).use(ElementPlus).mount('#app')
