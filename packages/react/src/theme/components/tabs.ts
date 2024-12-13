import { defineSlotRecipe } from "@chakra-ui/react";
import { tabsAnatomy } from "@chakra-ui/react/anatomy";

export const tabsTheme = defineSlotRecipe({
  slots: tabsAnatomy.keys(),
  base: {
    root: {
      colorPalette: "green",
      width: "fit-content",
    },
    trigger: {
      _selected: {
        color: "colorPalette.600",
      },
      _hover: {
        color: "colorPalette.400",
      },
      _disabled: {
        color: "gray.400",
        _hover: {
          color: "gray.400",
        },
      },
    },
  },
});
