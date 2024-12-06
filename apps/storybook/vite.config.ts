import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig(async () => {
  const resolvedReactPath = path.resolve(__dirname, "../../../packages/react/dist/index");
  const resolvedSrcPath = path.resolve(__dirname, "../../../packages/react/src");

  return {
    plugins: [react()],
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
  };
});
