import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      // constants
      '@constants': '/src/constants/index',
      // contexts
      // '@contexts': '/src/contexts',
      // Atoms
      // '@atoms': '/src/atoms/index',
      // Components
      '@components': '/src/components/index',
      // Hooks
      // '@hooks': '/src/hooks/index',
      // Layouts
      '@main-lay': '/src/layouts/main',
      '@auth-lay': '/src/layouts/auth',
      // Snippets
      // '@snippets': '/src/snippets',
      // GraphQL
      // '@gql': '/src/gql/index',
      // '@types': '/src/gql/graphql',
      // Modules
      '@auth': '/src/modules/auth',
      '@home': '/src/modules/home',
      '@models': '/src/modules/models',
    },
  },
  server: {
    host: true,
    port: 5174,
  },
})