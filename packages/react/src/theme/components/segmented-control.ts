import { defineSlotRecipe } from "@chakra-ui/react";
import { segmentGroupAnatomy } from "@chakra-ui/react/anatomy";

export const segmentedControlTheme = defineSlotRecipe({
  className: "kvib-segmented-control",
  slots: segmentGroupAnatomy.keys(),
  base: {
    root: {
      colorPalette: "green",
    },
    indicator: {
      bg: "white",
    },
  },
});
