import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Este es el plugin de React

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()] // Agrega el plugin de React
});
