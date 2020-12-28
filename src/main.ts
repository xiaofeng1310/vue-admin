import { createApp } from 'vue'
import router from './router'
import store from './store'
import ElementPuls from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'

import { setupGlobalDirective } from '@/directive/index'


const app = createApp(App)
app.use(ElementPuls).use(store).use(router).mount('#app')

setupGlobalDirective(app)
// createApp(App).use(store).use(router).mount('#app')
