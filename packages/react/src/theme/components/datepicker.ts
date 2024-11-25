import { defineSlotRecipe } from "@chakra-ui/react";

export const datepickerTheme = defineSlotRecipe({
  slots: ["root"],
  base: {
    root: {
      colorPalette: "green",
    },
  },
  defaultVariants: {
    colorPalette: "green",
  },
});
