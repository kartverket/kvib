import { defineSlotRecipe } from "@chakra-ui/react";

export const cardTheme = defineSlotRecipe({
  className: "kvib-card",
  slots: ["root", "header", "body", "footer"],
  variants: {
    variant: {
      elevated: {
        root: {
          bg: "bg.panel",
          boxShadow: "sm",
        },
      },
    },
  },
  defaultVariants: {
    variant: "elevated",
  },
});
