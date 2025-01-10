import { defineSlotRecipe } from "@chakra-ui/react";
import { selectAnatomy } from "@chakra-ui/react/anatomy";

export const selectTheme = defineSlotRecipe({
  className: "kvib-select",
  slots: selectAnatomy.keys(),
  base: {
    item: {
      _hover: {
        bg: "gray.100",
      },
      cursor: "pointer",
    },
  },
});
