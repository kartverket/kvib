import type { StorybookConfig } from "@storybook/react-vite";

import path, { dirname, join } from "path";
import { mergeConfig } from "vite";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-mdx-gfm"),
  ],

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  viteFinal: async (config, { configType }) => {
    // Determine the base path depending on the environment
    const basePath = process.env.GITHUB_ACTIONS
      ? path.resolve(__dirname, "../../../../packages/react")
      : path.resolve(__dirname, "../../../packages/react");

    const srcPath = process.env.GITHUB_ACTIONS
      ? path.resolve(__dirname, "../../../../packages/react/src")
      : path.resolve(__dirname, "../../../packages/react/src");

    console.log("Resolved @kvib/react path:", basePath);
    console.log("Resolved @ path:", srcPath);

    return mergeConfig(config, {
      resolve: {
        alias: [
          {
            find: "@kvib/react",
            replacement: basePath,
          },
          {
            find: "@",
            replacement: srcPath,
          },
        ],
      },
    });
  },
};
export default config;
