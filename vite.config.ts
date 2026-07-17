import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client", "src"),
        "@shared": path.resolve(__dirname, "shared"),
      },
    },
    // Aponta o diretório raiz do Vite para a pasta do cliente onde está o index.html
    root: path.resolve(__dirname, "client"),
    publicDir: path.resolve(__dirname, "client", "public"),
    
    // Define a rota base de forma dinâmica: 
    // Localmente usa '/' e no GitHub Pages usa o nome do repositório
    base: mode === "production" ? "/oraculo-primus-landing/" : "/",
    
    build: {
      outDir: path.resolve(__dirname, "dist"),
      emptyOutDir: true,
    },
  };
});