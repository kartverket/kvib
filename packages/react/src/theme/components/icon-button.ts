import { defineSlotRecipe } from "@chakra-ui/react";

export const iconButtonTheme = defineSlotRecipe({
  slots: ["root", "icon"],
  base: {
    root: {
      colorPalette: "green",
      borderRadius: "6px",
      outline: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: "0",
      _focusVisible: {
        boxShadow: "outline",
      },
      _disabled: {
        opacity: "0.5",
        cursor: "not-allowed",
      },
    },
  },
  variants: {
    size: {
      xs: {
        root: {
          padding: "6px",
          gap: "6px",
          width: "24px",
          height: "24px",
        },
      },
      sm: {
        root: {
          padding: "9px",
          width: "32px",
          height: "32px",
        },
      },
      md: {
        root: {
          padding: "12px",
          width: "40px",
          height: "40px",
        },
      },
      lg: {
        root: {
          lineHeight: "28px",
          padding: "15px",
          width: "48px",
          height: "48px",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
