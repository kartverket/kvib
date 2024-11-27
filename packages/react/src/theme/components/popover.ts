import { defineSlotRecipe } from "@chakra-ui/react";
import { popoverAnatomy } from "@chakra-ui/react/anatomy";

export const popoverTheme = defineSlotRecipe({
  className: "kvib-popover",
  slots: popoverAnatomy.keys(),
  base: {
    content: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      padding: "4px",
      outline: "{borders.1px}",
      outlineColor: "gray.200",
    },
  },
});
