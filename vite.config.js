import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   base: '/Password-Generator/',
  esbuild: {
    loader: 'jsx',
    include: /.*\.js$/, // This tells Vite to treat .js files in 'src' as JSX
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
})
