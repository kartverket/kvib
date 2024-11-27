import { defineRecipe } from "@chakra-ui/react";

export const linkTheme = defineRecipe({
  base: {
    colorPalette: "green",
  },
  variants: {
    variant: {
      underline: {
        color: "colorPalette.500 !important",
        textDecoration: "underline !important",
        _hover: {
          color: "colorPalette.400 !important",
          textDecoration: "none !important",
        },
      },
      plain: {
        color: "colorPalette.500 !important",
        textDecoration: "none !important",
        _hover: {
          color: "colorPalette.400 !important",
        },
      },
    },
  },
  defaultVariants: {
    variant: "underline",
  },
});
