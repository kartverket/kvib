import { defineSlotRecipe } from "@chakra-ui/react";
import { alertAnatomy } from "@chakra-ui/react/anatomy";

export const alertTheme = defineSlotRecipe({
  slots: alertAnatomy.keys(),
  base: {},
  variants: {
    variant: {
      subtle: {
        title: {
          color: "black !important",
        },
        root: {
          bg: "colorPalette.100 !important",
          color: "black !important",
        },
        indicator: {
          color: "colorPalette.500",
        },
      },
      solid: {
        title: {
          color: "white !important",
        },
        root: {
          bg: "colorPalette.500 !important",
          color: "white !important",
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
          color: "black !important",
        },
        root: {
          bg: "red.100 !important",
          color: "black !important",
        },
        indicator: {
          color: "red.500 !important",
        },
      },
    },
    {
      variant: "solid",
      status: "error",
      css: {
        title: {
          color: "white !important",
        },
        root: {
          bg: "red.500 !important",
          color: "white !important",
        },
        indicator: {
          color: "white !important",
        },
      },
    },
  ],
});
