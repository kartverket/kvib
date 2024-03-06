import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const sizes = {
  xs: defineStyle({
    padding: "1px",
  }),
  sm: defineStyle({
    padding: "2px",
  }),
  md: defineStyle({
    padding: "5px",
  }),
  lg: defineStyle({
    padding: "5px",
  }),
};

export const fileUploadTheme = defineStyleConfig({
  sizes,
  defaultProps: {
    size: "md",
  },
});
