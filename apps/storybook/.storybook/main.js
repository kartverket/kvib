import { dirname, join } from "path";
import { plugin as markdown } from "vite-plugin-markdown";

module.exports = {
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
    getAbsolutePath("@storybook/addon-mdx-gfm"),
  ],

  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },

  features: {
    emotionAlias: false,
  },

  docs: {},

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },

  core: {
    builder: "@storybook/builder-vite",
  },

  swc: (config, options) => ({
    jsc: {
      transform: {
        react: {
          runtime: "automatic",
        },
      },
    },
  }),

  viteFinal: async (config) => {
    config.plugins = config.plugins || [];
    config.plugins.push(
      markdown({
        mode: ["html", "raw"],
      }),
    );

    // Add a custom rule for .md files
    config.assetsInclude = config.assetsInclude || [];
    config.assetsInclude.push("**/*.md");

    return config;
  },
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
