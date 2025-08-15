import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
  ],
  core: {
    builder: "@storybook/builder-vite",
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
export default config;
