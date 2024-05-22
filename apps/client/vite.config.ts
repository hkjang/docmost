import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

export const envPath = path.resolve(process.cwd(), "..", "..");

export default defineConfig(({ mode }) => {
  const { APP_URL } = loadEnv(mode, envPath, "");

  return {
    define: {
      "process.env": {
        APP_URL,
      },
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  };
});
