import react from "@vitejs/plugin-react";
import { CodeInspectorPlugin } from "code-inspector-plugin";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    CodeInspectorPlugin({
      bundler: "vite",
    }),
  ],
});
