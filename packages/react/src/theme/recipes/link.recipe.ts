import { defineRecipe } from "@chakra-ui/react";

export const linkRecipe = defineRecipe({
  base: {
    textDecoration: "underline",
    color: "colorPalette.500",
    _focusVisible: {
      borderRadius: "1px",
      boxShadow: "none",
      outline: "2px solid",
    },
    _hover: {
      textDecoration: "none",
      color: "colorPalette.400",
    },
    _active: {
      textDecoration: "underline",
    },
  },
});
