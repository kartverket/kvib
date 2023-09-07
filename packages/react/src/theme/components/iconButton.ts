import { variantSolid, variantOutline, variantLink, variantGhost } from "./button";
import { defineStyleConfig } from "@chakra-ui/react";

export const iconButtonTheme = defineStyleConfig({
  baseStyle: () => ({
    borderRadius: "6px",
    outline: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    _focusVisible: {
      boxShadow: "outline",
    },
    _disabled: {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  }),
  sizes: {
    xs: {
      padding: "6px",
      gap: "6px",
      width: "24px",
      height: "24px",
    },
    sm: {
      padding: "9px",
      width: "32px",
      height: "32px",
    },
    md: {
      padding: "12px",
      width: "40px",
      height: "40px",
    },
    lg: {
      lineHeight: "28px",
      padding: "15px",
      width: "48px",
      height: "48px",
    },
  },
  variants: {
    primary: variantSolid,
    secondary: variantOutline,
    tertiary: variantLink,
    ghost: variantGhost,
  },
  defaultProps: {
    variant: "primary",
    colorScheme: "green",
    size: "md",
  },
});
