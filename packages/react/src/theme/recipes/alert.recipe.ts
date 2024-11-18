import { defineSlotRecipe } from "@chakra-ui/react";
import { colors } from "../tokens";

export const alertSlotRecipe = defineSlotRecipe({
  className: "kvib-alert",
  slots: ["title", "description", "root", "indicator", "content"],
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      borderRadius: "none",
    },
    title: {
      fontWeight: "bold",
    },
  },
  variants: {
    status: {
      info: {
        root: { colorPalette: "blue" },
      },
      warning: {
        root: { colorPalette: "orange" },
      },
      success: {
        root: { colorPalette: "green" },
      },
      error: {
        root: { colorPalette: "red" },
      },
      neutral: {
        root: { colorPalette: "gray" },
      },
    },

    variant: {
      subtle: {
        root: {
          color: colors.black.value,
        },
      },
    },
  },
});
