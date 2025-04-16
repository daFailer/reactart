import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  let base = '/'

  if (mode === 'test') {
    base = '/reactart/'
  }

  return {
    plugins: [
      react(),
      tailwindcss()
    ],
    base,
  }
})
