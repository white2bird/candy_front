import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import request from '@/utils/request'
import store from '@/store/index'
import './index.css' // 引入全局样式 解决页面抖动

//  这玩意是个全局初始化文件
const app = createApp(App)
app.provide(/* 注入名 */ '$request', /* 值 */ request)
app.use(router).use(ElementPlus).use(store).mount('#app')
