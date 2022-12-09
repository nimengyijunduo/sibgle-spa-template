import { createApp } from 'vue'
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'
import { createPinia } from 'pinia'

import microApps from './micro-app'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'uno.css'

const instance: any = createApp(App)

// 全局异常处理器
instance.config.errorHandler = (err: any, vm: any, info: any) => {
    console.log('[全局异常]', err, vm, info)
}

instance.use(createPinia())
instance.use(router)

instance.mount('#app')

// 定义loader方法，loading改变时，将变量赋值给App.vue的data中的isLoading
function loader(loading: any) {
    if (instance && instance.$children) {
        // instance.$children[0] 是App.vue，此时直接改动App.vue的isLoading
        instance.$children[0].isLoading = loading
    }
}

// 给子应用配置加上loader方法
const apps = microApps.map(item => {
    return {
        ...item,
        loader,
    }
})

registerMicroApps(apps)

// setDefaultMountApp('/sub-vue')

start()
