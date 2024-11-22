import { defineRecipe, defineStyle } from "@chakra-ui/react";
import { buttonTheme } from "./button";

const baseStyle = defineStyle({
  borderRadius: "md !important",
  outline: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  _focusVisible: {
    boxShadow: "outline",
  },
  _disabled: {
    opacity: "0.5",
    cursor: "not-allowed",
  },
});

const sizes = {
  xs: defineStyle({
    padding: "1.5 !important",
    gap: "1.5 !important",
    width: "6 !important",
    height: "6 !important",
  }),
  sm: defineStyle({
    padding: "2 !important",
    gap: "2 !important",
    width: "8 !important",
    height: "8 !important",
  }),
  md: defineStyle({
    padding: "2.5 !important",
    gap: "2.5 !important",
    width: "10 !important",
    height: "10 !important",
  }),
  lg: defineStyle({
    padding: "3 !important",
    gap: "3 !important",
    width: "12 !important",
    height: "12 !important",
  }),
};

export const iconButtonTheme = defineRecipe({
  base: baseStyle,
  variants: {
    ...buttonTheme.variants,
    size: sizes,
  },
  defaultVariants: {
    size: "md",
  },
});
