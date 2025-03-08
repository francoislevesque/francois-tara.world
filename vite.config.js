import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [
    vue(),
    VueI18nPlugin(),
    AutoImport({
      imports: ['vue', 'vue-router', 'vue-i18n'],
      dts: true,
    }),
  ],
})
