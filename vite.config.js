import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server:{
  cors:false},
  plugins: [react()],
});