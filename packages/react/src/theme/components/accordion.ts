import { defineSlotRecipe } from "@/theme-utils";
import { accordionAnatomy } from "@chakra-ui/react/anatomy";

export const accordionTheme = defineSlotRecipe({
  slots: accordionAnatomy.keys(),
  className: "kvib-accordion",
  base: {
    itemTrigger: {
      padding: "0 1rem",
      cursor: "pointer",
      transition: "background-color 0.2s",
      _hover: {
        bg: "blackAlpha.50",
      },
    },
    itemContent: {
      padding: "0 1rem",
    },
  },
});
