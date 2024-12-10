import { defineSlotRecipe } from "@chakra-ui/react";
import { radioGroupAnatomy } from "@chakra-ui/react/anatomy";

export const radioGroupTheme = defineSlotRecipe({
  className: "kvib-radio-group",
  slots: radioGroupAnatomy.keys(),
  base: {
    root: {
      colorPalette: "green",
    },
  },
});
