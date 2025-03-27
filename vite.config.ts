import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
	build: {
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						return 'vendor' // Все сторонние модули в один чанк
					}
				},
			},
		},
		minify: 'esbuild',
		esbuild: {
			drop: mode === 'production' ? ['console', 'debugger'] : [], // Убираем console.log в проде
		},
		sourcemap: mode === 'development', // Включаем в dev, выключаем в prod
	},
	plugins: [react()],
	server: {
		port: 3000, // Можно изменить порт при необходимости
		open: true, // Автоматически открывать браузер
		strictPort: true, // Если порт 3000 занят — ошибка, а не автоизменение
		cors: true, // Включает CORS (полезно при API-запросах)
	},
}))
