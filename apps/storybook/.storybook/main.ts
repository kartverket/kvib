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
    const resolvedReactPath = path.resolve(__dirname, "../../../packages/react/dist/index");
    const resolvedSrcPath = path.resolve(__dirname, "../../../packages/react/src");

    return mergeConfig(config, {
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
    });
  },
};
export default config;
