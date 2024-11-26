import { defineSlotRecipe } from "@chakra-ui/react";
import { menuAnatomy } from "@chakra-ui/react/anatomy";

export const menuTheme = defineSlotRecipe({
  className: "kvib-menu",
  slots: menuAnatomy.keys(),
  base: {
    item: {
      width: "inherit",
    },
  },
  variants: {
    variant: {},
  },
});
