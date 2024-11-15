import { defineRecipe } from "@chakra-ui/react";
import { buttonRecipe } from "./button.recipe";

export const iconButtonRecipe = defineRecipe({
  base: {
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
  },
  variants: {
    variant: {
      ...buttonRecipe.variants?.variant,
    },
    size: {
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
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
