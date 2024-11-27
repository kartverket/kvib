import { defineRecipe } from "@chakra-ui/react";

export const closeButtonTheme = defineRecipe({
  base: {
    colorPalette: "gray",
    _hover: {
      bg: "colorPalette.100 !important",
    },
  },
});
