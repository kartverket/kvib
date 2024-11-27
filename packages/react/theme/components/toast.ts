import { defineSlotRecipe } from "@chakra-ui/react";
import { toastAnatomy } from "@chakra-ui/react/anatomy";

export const toastTheme = defineSlotRecipe({
  className: "kvib-toast",
  slots: toastAnatomy.keys(),
  base: {
    root: {
      borderRadius: "md",
      boxShadow: "md",
      padding: "4",
      marginBottom: "4",
    },
  },
});
