import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/home/welcome', // 重定向
        },
        {
            path: '/home',
            name: 'layout',
            component: () => import('../layout/home.vue'),
            children: [
                {
                    path: 'welcome',
                    name: 'welcome',
                    component: () => import('../features/Welcome/routes/index.vue'),
                    meta: { title: '欢迎页' },
                },
                {
                    path: 'about',
                    name: 'about',
                    component: () => import('../features/About/routes/index.vue'),
                    meta: { title: '关于页' },
                },
            ],
        },
    ],
})

export default router
