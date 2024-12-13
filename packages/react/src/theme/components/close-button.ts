import { defineRecipe } from "@chakra-ui/react";

export const closeButtonTheme = defineRecipe({
  base: {
    colorPalette: "green",
    _hover: {
      bg: "colorPalette.100",
    },
  },
});
