import path from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "vitest/config";

import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";

import { playwright } from "@vitest/browser-playwright";

const dirname = path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
            tags: { exclude: ["skip-test", "no-tests"] },
          }),
        ],
        // On a cold cache (every CI run) Vite discovers these mid-run and reloads, which
        // makes every story test file fail. Add new entries here if Vitest warns
        // "Vite unexpectedly reloaded a test".
        optimizeDeps: {
          include: [
            "react/jsx-dev-runtime",
            "@chakra-ui/react",
            "storybook/actions",
            "storybook/theming",
            "usehooks-ts",
          ],
        },
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: "chromium" }],
          },
        },
      },
    ],
  },
});
