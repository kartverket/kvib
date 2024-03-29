import { defineStyleConfig } from "@chakra-ui/react";

export const inputTheme = defineStyleConfig({
  baseStyle: {
    // Any base styles should go directly here
  },
  variants: {
    outline: {
      field: {
        borderColor: "gray.400",
      },
    },
    flushed: {
      field: {
        borderColor: "gray.400",
      },
    },
  },
});
