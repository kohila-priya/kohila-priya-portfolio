import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    rollupOptions: {
      input: {
        home: `${root}index.html`,
        about: `${root}about.html`,
        internship: `${root}internship.html`,
        learning: `${root}learning.html`,
        projects: `${root}projects.html`,
        contact: `${root}contact.html`
      }
    }
  }
});
