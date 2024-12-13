import { defineRecipe } from "@chakra-ui/react";

export const linkTheme = defineRecipe({
  base: {
    colorPalette: "green",
    fontWeight: 400,
  },
  variants: {
    variant: {
      underline: {
        "& > *:not(span)": {
          textDecoration: "none",
        },
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
