import { defineSlotRecipe } from "@chakra-ui/react";

export const closeButtonSlotRecipe = defineSlotRecipe({
  className: "kvib-close-button",
  slots: ["root"],
  base: {
    root: {
      _hover: {
        bg: "red.100",
      },
    },
  },
  defaultVariants: {
    colorPalette: "blue",
  },
});
