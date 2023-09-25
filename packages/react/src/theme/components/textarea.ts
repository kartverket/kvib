import { defineStyleConfig } from "@chakra-ui/react";

export const textareaTheme = defineStyleConfig({
  baseStyle: {
    // Any base styles should go directly here
  },
  variants: {
    outline: {
      borderColor: "gray.400",
    },
    flushed: {
      borderColor: "gray.400",
    },
  },
});
