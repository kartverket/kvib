import { defineSlotRecipe } from "@chakra-ui/react";
import { toastAnatomy } from "@chakra-ui/react/anatomy";

export const toastTheme = defineSlotRecipe({
  className: "kvib-toast",
  slots: toastAnatomy.keys(),
  base: {
    root: {
      borderRadius: "lg",
      boxShadow: "none",
      pt: "3",
      pb: "3",
      pl: "4",
      pr: "4",
      gap: "3",
      bg: "blue.100",
      color: "gray.900",
      alignItems: "center",
      width: "full",
      display: "flex",
      fontSize: "md",
      "&[data-type=success]": {
        bg: "green.100",
        color: "gray.900",
      },
      "&[data-type=warning]": {
        bg: "orange.100",
        color: "gray.900",
      },
      "&[data-type=error]": {
        bg: "red.100",
        color: "gray.900",
      },
    },
    title: {
      fontWeight: "bold",
    },
  },
});
