import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      api: "/src/api",
      components: "/src/components",
      hook: "/src/hook",
      img: "/src/img",
      models: "/src/models",
      pages: "/src/pages",
      redirect: "/src/redirect",
      store: "/src/store",
      style: "/src/style",
      UI: "/src/UI",
    },
  },
});
