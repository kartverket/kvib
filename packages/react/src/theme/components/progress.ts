import { defineSlotRecipe } from "@chakra-ui/react";
import { progressAnatomy } from "@chakra-ui/react/anatomy";

export const progressTheme = defineSlotRecipe({
  className: "kvib-progress",
  slots: progressAnatomy.keys(),
  base: {
    root: {
      colorPalette: "green",
    },
  },
});
