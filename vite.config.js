import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {},
  },
  build: {
    lib: {
      entry: "./src/sdk/index.js",
      name: "MultiIdSdkWeb",
      fileName: (format) => `multi-sdk.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    cssCodeSplit: false,
  },
});
