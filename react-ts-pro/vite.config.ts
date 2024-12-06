import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  /* 配置路径别名
    依赖：npm i @types/node -D
    引用：import path from 'path'
  */
  resolve: {
    alias:{
      '@': path.resolve(__dirname,'./src')
    }
  }
})
