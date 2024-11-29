import { defineSlotRecipe } from "@chakra-ui/react";
import { switchAnatomy } from "@chakra-ui/react/anatomy";

export const switchTheme = defineSlotRecipe({
  className: "kvib-switch",
  slots: switchAnatomy.keys(),
  base: {
    root: {
      colorPalette: "green",
    },
  },
});
