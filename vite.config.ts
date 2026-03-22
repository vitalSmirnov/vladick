import { defineConfig } from "vite"
import react, { reactCompilerPreset } from "@vitejs/plugin-react"
import babel from "@rolldown/plugin-babel"
import path from "path"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] }), tailwindcss()],
  server: {
    host: "localhost",
    port: 5173,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      app: path.resolve(__dirname, "./src/app"),
      features: path.resolve(__dirname, "./src/features"),
      sections: path.resolve(__dirname, "./src/sections"),
      shared: path.resolve(__dirname, "./src/shared"),
    },
  },
})
