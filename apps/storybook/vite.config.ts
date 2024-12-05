import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(async () => {
  const resolvedReactPath = path.resolve(__dirname, "../../../packages/react/dist/index");
  const resolvedSrcPath = path.resolve(__dirname, "../../../packages/react/src");

  return {
    plugins: [react(), tsconfigPaths()],
    resolve: {
      alias: [
        {
          find: "@kvib/react",
          replacement: resolvedReactPath,
        },
        {
          find: "@",
          replacement: resolvedSrcPath,
        },
      ],
    },
    // You can add other Vite configurations here if needed
  };
});
