import { defineSlotRecipe } from "@chakra-ui/react";
import { alertAnatomy } from "@chakra-ui/react/anatomy";

export const alertTheme = defineSlotRecipe({
  slots: alertAnatomy.keys(),
  base: {
    root: {
      fontSize: "fontSizes.md",
    },
    title: {
      fontSize: "fontSizes.md",
      fontWeight: "bold",
    },
  },
  variants: {
    variant: {
      subtle: {
        title: {
          color: "black",
        },
        root: {
          bg: "colorPalette.100",
          color: "black ",
        },
        indicator: {
          color: "colorPalette.500",
        },
      },
      solid: {
        title: {
          color: "white ",
        },
        root: {
          bg: "colorPalette.500",
          color: "white ",
        },
        indicator: {
          color: "white",
        },
      },
    },
    status: {
      error: {},
      info: {},
      warning: {},
      success: {},
      neutral: {},
    },
  },
  compoundVariants: [
    {
      variant: "subtle",
      status: "error",
      css: {
        title: {
          color: "black",
        },
        root: {
          bg: "red.100",
          color: "black",
        },
        indicator: {
          color: "red.500",
        },
      },
    },
    {
      variant: "solid",
      status: "error",
      css: {
        title: {
          color: "white",
        },
        root: {
          bg: "red.500",
          color: "white",
        },
        indicator: {
          color: "white",
        },
      },
    },
  ],
});
