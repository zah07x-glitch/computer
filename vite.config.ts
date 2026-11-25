import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// عند النشر على GitHub Pages يُضبط BASE تلقائيًا من اسم المستودع
export default defineConfig({ base: process.env.BASE || './', plugins: [react()], resolve: { alias: {} } })
