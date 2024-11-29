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
          bg: "colorPalette.500 !important",
          color: "white !important",
        },
      },
      outline: {
        root: {
          outline: "1px !important",
          borderColor: "colorPalette.500 !important",
          color: "colorPalette.500 !important",
        },
      },
      plain: {
        root: {
          color: "colorPalette.500 !important",
          bg: "transparent !important",
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
          bg: "gray.100 !important",
          color: "black !important",
        },
      },
    },
    {
      variant: "outline",
      colorPalette: "gray",
      css: {
        root: {
          outline: "1px !important",
          borderColor: "gray.200 !important",
          color: "black !important",
        },
      },
    },
    {
      variant: "plain",
      colorPalette: "gray",
      css: {
        root: {
          color: "gray.500 !important",
          bg: "transparent !important",
        },
      },
    },
  ],
  defaultVariants: {
    variant: "solid",
    colorPalette: "gray",
  },
});
