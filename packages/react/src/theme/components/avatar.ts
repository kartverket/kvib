import { defineSlotRecipe } from "@chakra-ui/react";
import { avatarAnatomy } from "@chakra-ui/react/anatomy";

export const avatarTheme = defineSlotRecipe({
  className: "kvib-avatar",
  slots: avatarAnatomy.keys(),
  base: {
    fallback: {
      fontWeight: 800,
    },
  },
});
