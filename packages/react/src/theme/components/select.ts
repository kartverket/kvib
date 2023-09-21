import { defineStyleConfig } from "@chakra-ui/react";

export const selectTheme = defineStyleConfig({
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
