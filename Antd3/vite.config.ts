import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          '@primary-color': '#5D6EA4',
          '@border-radius-base': '4px'
        },
        javascriptEnabled: true
      }
    }
  }
})
