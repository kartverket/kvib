import { defineSlotRecipe } from "@chakra-ui/react";
import { sliderAnatomy } from "@chakra-ui/react/anatomy";

export const sliderTheme = defineSlotRecipe({
  className: "kvib-radio-group",
  slots: sliderAnatomy.keys(),
  base: {
    root: {
      colorPalette: "green",
    },
  },
});
