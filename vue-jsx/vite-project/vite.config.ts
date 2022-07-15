import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  esbuild: {
    // 此配置是为了在vue中使用jsx
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: "import { h } from 'vue';",
  }
})
