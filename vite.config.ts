import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3000
    },
    plugins: [
        vue({
            template: { transformAssetUrls }
        }),

        quasar({
            autoImportComponentCase: 'combined',
            sassVariables: 'src/quasar-variables.sass'
        },)
    ]
})
