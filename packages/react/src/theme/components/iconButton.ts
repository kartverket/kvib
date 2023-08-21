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
      fontSize: "12px",
      padding: "6px",
      gap: "6px",
      width: "24px",
      height: "24px",
      ".material-symbols-rounded": {
        fontSize: "20px",
      },
    },
    sm: {
      fontSize: "14px",
      padding: "9px",
      width: "32px",
      height: "32px",
      ".material-symbols-rounded": {
        fontSize: "20px",
      },
    },
    md: {
      fontSize: "16px",
      padding: "12px",
      width: "40px",
      height: "40px",
      ".material-symbols-rounded": {
        fontSize: "24px",
      },
    },
    lg: {
      fontSize: "18px",
      lineHeight: "28px",
      padding: "15px",
      width: "48px",
      height: "48px",
      ".material-symbols-rounded": {
        fontSize: "24px",
      },
    },
  },
  variants: {
    solid: variantSolid,
    outline: variantOutline,
    link: variantLink,
    ghost: variantGhost,
  },
  defaultProps: {
    variant: "solid",
    colorScheme: "green",
    size: "md",
  },
});
