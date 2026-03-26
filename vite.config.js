import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/My-mini-VK/', // 👈 ВСТАВЬ СЮДА ТОЧНОЕ ИМЯ ТВОЕГО РЕПОЗИТОРИЯ ИЗ GITHUB (между слешами)
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  }
})