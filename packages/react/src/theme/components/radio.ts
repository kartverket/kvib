import { defineSlotRecipe } from "@chakra-ui/react";

export const radioTheme = defineSlotRecipe({
  className: "kvib-radio",
  slots: ["item", "control", "label"],
  base: {
    item: {
      cursor: "pointer",
    },
  },
});
