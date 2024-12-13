import { defineRecipe } from "@chakra-ui/react";

export const linkTheme = defineRecipe({
  base: {
    colorPalette: "green",
    fontWeight: 500,
  },
  variants: {
    variant: {
      underline: {
        textDecorationThickness: "1px",
        textDecorationColor: "colorPalette.500",
        color: "colorPalette.500",
        _hover: {
          color: "colorPalette.400",
          textDecoration: "none",
        },
      },
      plain: {
        color: "colorPalette.500",
        textDecoration: "none",
        _hover: {
          color: "colorPalette.400",
        },
      },
    },
  },
  defaultVariants: {
    variant: "underline",
  },
});
