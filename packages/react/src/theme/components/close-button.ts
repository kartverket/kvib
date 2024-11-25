import { defineSlotRecipe } from "@chakra-ui/react";

export const closeButtonTheme = defineSlotRecipe({
  slots: ["root", "icon"],
  base: {
    root: {
      _hover: {
        bg: "colorPalette.100 !important",
      },
    },
  },
});
