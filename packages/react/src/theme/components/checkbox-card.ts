import { defineSlotRecipe } from "@chakra-ui/react";
import { checkboxCardAnatomy } from "@chakra-ui/react/anatomy";

export const checkboxCardTheme = defineSlotRecipe({
  slots: checkboxCardAnatomy.keys(),
  base: {
    root: {
      colorPalette: "green",
      cursor: "pointer",
    },
  },
  defaultVariants: {
    colorPalette: "green",
  },
});
