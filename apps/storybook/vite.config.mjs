import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

// Convert __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../../packages/react/src"),
    },
  },
});
