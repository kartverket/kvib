import { dirname, join } from "path";

module.exports = {
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
  },

  staticDirs: ["../public"],
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-a11y"),
    {
      name: "@storybook/addon-storysource",
      options: {
        loaderOptions: {
          injectStoryParameters: true,
        },
      },
    },
  ],

  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },

  features: {
    emotionAlias: false,
  },

  docs: {},
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
