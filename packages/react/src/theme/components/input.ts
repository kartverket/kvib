import { defineRecipe } from "@chakra-ui/react";

export const inputTheme = defineRecipe({
  base: {},
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
