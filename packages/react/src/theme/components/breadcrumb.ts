import { defineSlotRecipe } from "@chakra-ui/react";
import { breadcrumbAnatomy } from "@chakra-ui/react/anatomy";

export const breadcrumbTheme = defineSlotRecipe({
  slots: breadcrumbAnatomy.keys(),
  base: {
    link: {
      "&:not([aria-current=page])": {
        color: "colorPalette.500 !important",
        textDecoration: "underline !important",
        _focusVisible: {
          outline: "{borders.2px} !important",
          borderRadius: "1px !important",
          outlineColor: "blue.600 !important",
          boxShadow: "none !important",
        },
        _active: {
          color: "colorPalette.600 !important",
          textDecoration: "underline !important",
        },
        _hover: {
          color: "colorPalette.400 !important",
          textDecoration: "none !important",
        },
      },
    },
  },
  variants: {
    variant: {
      plain: {
        link: {
          textDecoration: "none !important",
        },
      },
    },
  },
});
