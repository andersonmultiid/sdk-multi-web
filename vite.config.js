import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {},
    URL_SOCKET_WEB: JSON.stringify(
      "https://service-capture-437894375097.us-central1.run.app"
    ),
  },
  build: {
    lib: {
      entry: "./src/sdk/index.js",
      name: "MultiIdSdkWeb",
      fileName: (format) => `web-multi-sdk.${format}.js`,
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
