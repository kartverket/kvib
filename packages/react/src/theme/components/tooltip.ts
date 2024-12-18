import { defineSlotRecipe } from "@chakra-ui/react";
import { tooltipAnatomy } from "@chakra-ui/react/anatomy";

export const tooltipTheme = defineSlotRecipe({
  className: "kvib-tooltip",
  slots: tooltipAnatomy.keys(),
  base: {
    content: {
      fontSize: "fontSizes.sm",
      bg: "gray.700",
      pb: "2",
    },
  },
});
