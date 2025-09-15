import type { Preview } from "@storybook/react";

const customViewports = {
  small: {
    name: "Small",
    styles: {
      width: "320px",
      height: "568px",
    },
  },
  medium: {
    name: "Medium",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },
  large: {
    name: "Large",
    styles: {
      width: "1280px",
      height: "800px",
    },
  },
};

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: customViewports,
    },
  },
};

export default preview;
