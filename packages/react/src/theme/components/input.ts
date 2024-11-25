import { defineRecipe } from "@chakra-ui/react";

export const inputTheme = defineRecipe({
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
