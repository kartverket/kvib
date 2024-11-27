import { defineSlotRecipe } from "@chakra-ui/react";
import { stepsAnatomy } from "@chakra-ui/react/anatomy";

export const stepsTheme = defineSlotRecipe({
  className: "kvib-steps",
  slots: stepsAnatomy.keys(),
  base: {
    root: {
      colorPalette: "green",
    },
  },
});
