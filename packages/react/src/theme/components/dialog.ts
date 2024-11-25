import { defineSlotRecipe } from "@chakra-ui/react";
import { dialogAnatomy } from "@chakra-ui/react/anatomy";

export const dialogTheme = defineSlotRecipe({
  slots: dialogAnatomy.keys(),
  base: {
    content: {
      colorPalette: "green",
    },
    trigger: {
      colorPalette: "green",
    },
    backdrop: {
      bg: "blackAlpha.700 !important",
    },
  },
});
