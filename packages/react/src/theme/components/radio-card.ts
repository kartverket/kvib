import { defineSlotRecipe } from "@chakra-ui/react";
import { radioCardAnatomy } from "@chakra-ui/react/anatomy";

export const radioCardTheme = defineSlotRecipe({
  className: "kvib-radio",
  slots: radioCardAnatomy.keys(),
  base: {
    item: {
      cursor: "pointer",
    },
  },
});
