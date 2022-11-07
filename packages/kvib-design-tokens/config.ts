export default {
  source: ["tokens/**/*.json"],
  platforms: {
    javascript: {
      transforms: ["attribute/cti", "name/cti/pascal", "size/px", "color/css"],
      files: [
        {
          format: "typescript/cjs-module",
          destination: "dist/tokens.js",
        },
        {
          format: "typescript/es-module",
          destination: "dist/tokens.mjs",
        },
        {
          format: "typescript/typings",
          destination: "dist/tokens.d.ts",
        },
      ],
    },
    css: {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "time/seconds",
        "content/icon",
        "size/pxToRem",
        "color/css",
      ],
      files: [
        {
          format: "css/variables",
          destination: "dist/tokens.css",
        },
      ],
    },
    scss: {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "time/seconds",
        "content/icon",
        "size/pxToRem",
        "color/css",
      ],
      files: [
        {
          format: "scss/variables",
          destination: "dist/_tokens.scss",
        },
      ],
    },
  },
};
