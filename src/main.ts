import { createApp, h } from 'vue'
import { registerMicroApps, start } from 'qiankun'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'uno.css'

registerMicroApps([
    {
        name: 'app1', // app name registered
        entry: { scripts: ['../dist/child-app1.umd.js'] },
        container: '#child-app',
        activeRule: '/app1',
    },
])

start()

const app = createApp(App)

// 全局异常处理器
app.config.errorHandler = (err, vm, info) => {
    console.log('[全局异常]', err, vm, info)
}

app.use(createPinia())
app.use(router)

app.mount('#app')
