import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 部署到 GitHub Pages 项目页时，建议把 base 改成 '/你的仓库名/'。
// 当前默认使用相对路径，开箱即可直接部署到任意仓库路径下。
export default defineConfig({
  base: './',
  plugins: [vue()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
