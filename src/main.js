import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

//  这玩意是个全局初始化文件
createApp(App).use(router).mount('#app')
