import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // Listens on all network interfaces
    port: 5173, // Or any other port you wish
  },

  plugins: [react()],
});
