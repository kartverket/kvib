import { defineSlotRecipe } from "@chakra-ui/react";

export const iconButtonTheme = defineSlotRecipe({
  slots: ["root", "icon"],
  base: {
    root: {
      borderRadius: "6px !important",
      outline: "0 !important",
      display: "flex !important",
      alignItems: "center !important",
      justifyContent: "center !important",
      flexShrink: "0 !important",
      _focusVisible: {
        boxShadow: "outline !important",
      },
      _disabled: {
        opacity: "0.5 !important",
        cursor: "not-allowed !important",
      },
    },
  },
  variants: {
    size: {
      xs: {
        root: {
          padding: "6px !important",
          gap: "6px !important",
          width: "24px !important",
          height: "24px !important",
        },
      },
      sm: {
        root: {
          padding: "9px !important",
          width: "32px !important",
          height: "32px !important",
        },
      },
      md: {
        root: {
          padding: "12px !important",
          width: "40px !important",
          height: "40px !important",
        },
      },
      lg: {
        root: {
          lineHeight: "28px !important",
          padding: "15px !important",
          width: "48px !important",
          height: "48px !important",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
