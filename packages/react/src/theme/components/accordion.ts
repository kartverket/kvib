import { defineSlotRecipe } from "@/theme-utils";
import { accordionAnatomy } from "@chakra-ui/react/anatomy";

export const accordionTheme = defineSlotRecipe({
  slots: accordionAnatomy.keys(),
  className: "kvib-accordion",
  base: {
    itemTrigger: {
      cursor: "pointer",
    },
  },
});
