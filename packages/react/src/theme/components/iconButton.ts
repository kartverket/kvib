// import { colors } from "../tokens";
import { variantSolid, variantOutline } from "./button";

import { defineStyleConfig } from "@chakra-ui/react";

export const IconButtonTheme = defineStyleConfig({
  baseStyle: () => ({
    borderRadius: "6px",
    outline: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
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
    },
    sm: {
      fontSize: "14px",
      padding: "9px",
      width: "32px",
      height: "32px",
    },
    md: {
      fontSize: "16px",
      padding: "12px",
      width: "40px",
      height: "40px",
    },
    lg: {
      fontSize: "18px",
      lineHeight: "28px",
      padding: "15px",
      width: "48px",
      height: "48px",
    },
  },
  variants: {
    solid: variantSolid,
    outline: variantOutline,
  },
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "green",
  },
});
