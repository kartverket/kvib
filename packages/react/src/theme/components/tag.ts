import { defineSlotRecipe } from "@chakra-ui/react";
import { tagAnatomy } from "@chakra-ui/react/anatomy";
import { buttonTheme } from "./button";

export const tagTheme = defineSlotRecipe({
  className: "kvib-tag",
  slots: tagAnatomy.keys(),
  base: {
    root: {
      ...buttonTheme.base,
    },
  },
  variants: {
    variant: {
      solid: {
        root: {
          bg: "colorPalette.500",
          color: "white",
        },
      },
      outline: {
        root: {
          outline: "1px",
          borderColor: "colorPalette.500",
          color: "colorPalette.500",
        },
      },
      plain: {
        root: {
          color: "colorPalette.500",
          bg: "transparent",
        },
      },
    },
  },
  compoundVariants: [
    {
      variant: "solid",
      colorPalette: "gray",
      css: {
        root: {
          bg: "gray.100",
          color: "black",
        },
      },
    },
    {
      variant: "outline",
      colorPalette: "gray",
      css: {
        root: {
          outline: "1px",
          borderColor: "gray.200",
          color: "black",
        },
      },
    },
    {
      variant: "plain",
      colorPalette: "gray",
      css: {
        root: {
          color: "gray.500",
          bg: "transparent",
        },
      },
    },
  ],
  defaultVariants: {
    variant: "solid",
    colorPalette: "gray",
  },
});
