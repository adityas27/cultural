import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({

   build: {
    rollupOptions: {
      external: ['locomotive-scroll'], // Mark as external
    },
  },
   resolve: {
    alias: {
      'locomotive-scroll': 'locomotive-scroll/dist/locomotive-scroll.esm.js',
    },
  },
   optimizeDeps: {
      include: ['locomotive-scroll'],
      include: ['mdb-react-ui-kit'],
  },
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.JPEG'],
   server: {
    historyApiFallback: true
  }
})
