/* This code snippet is a configuration file for a Vite project, which is a build tool for modern web
development. Here's what each part of the code is doing: */
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
})
