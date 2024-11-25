import { defineSlotRecipe } from "@chakra-ui/react";

export const linkTheme = defineSlotRecipe({
  slots: ["root", "link"],
  base: {
    root: {
      color: "colorPalette.500 !important",
      textDecoration: "underline !important",
      _focusVisible: {
        outline: "{borders.2px} !important",
        borderRadius: "1px !important",
        outlineColor: "blue.600 !important",
        boxShadow: "none !important",
      },
      _hover: {
        color: "colorPalette.400 !important",
        textDecoration: "none !important",
      },
      _active: {
        color: "colorPalette.600 !important",
        textDecoration: "underline !important",
      },
    },
    link: {
      color: "colorPalette.500 !important",
    },
  },
});
