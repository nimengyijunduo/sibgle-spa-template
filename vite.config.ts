import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
/** JSX & TSX support with HMR */
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import eslintPlugin from 'vite-plugin-eslint'
/** antD按需加载 */
import Components from 'unplugin-vue-components/vite'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    return {
        root: '.',
        plugins: [
            vue({
                template: {
                    compilerOptions: {
                        isCustomElement: tag => tag.startsWith('qys-'),
                    },
                },
            }),
            vueJsx(),
            Unocss(),
            AutoImport({
                include: [
                    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                    /\.vue$/,
                    /\.vue\?vue/, // .vue
                ],
                imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
                dts: './src/auto-import.d.ts',
                eslintrc: {
                    enabled: false,
                },
            }),
            eslintPlugin({
                include: [
                    'src/**/*.js',
                    'src/**/*.ts',
                    'src/**/*.vue',
                    'src/*.js',
                    'src/*.ts',
                    'src/*.vue',
                ],
                cache: false,
            }),
            Components({
                resolvers: [HeadlessUiResolver()],
                dirs: 'src/components',
                extensions: ['vue', 'tsx', 'jsx'],
                dts: true,
                types: [
                    {
                        from: 'vue-router',
                        names: ['RouterLink', 'RouterView'],
                    },
                ],
            }),
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
        server: {
            host: '0.0.0.0',
            port: 4000,
            strictPort: true,
            open: true,
            proxy: {
                '/api': {
                    target: '',
                    changeOrigin: true,
                    rewrite: path => path.replace(/^\/api/, ''),
                },
            },
        },
    }
})
