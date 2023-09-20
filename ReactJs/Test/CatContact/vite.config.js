import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: (path.resolve(dirname, './dist/')).replace(/\\/g, '/'),
  plugins: [react()],
})
