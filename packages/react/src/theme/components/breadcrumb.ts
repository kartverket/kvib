import { defineSlotRecipe } from "@chakra-ui/react";
import { breadcrumbAnatomy } from "@chakra-ui/react/anatomy";

export const breadcrumbTheme = defineSlotRecipe({
  slots: breadcrumbAnatomy.keys(),
  base: {
    link: {
      "&:not([aria-current=page])": {
        color: "colorPalette.500 ",
        textDecoration: "underline ",
        _focusVisible: {
          outline: "{borders.2px} ",
          borderRadius: "1px ",
          outlineColor: "blue.600 ",
          boxShadow: "none ",
        },
        _active: {
          color: "colorPalette.600 ",
          textDecoration: "underline ",
        },
        _hover: {
          color: "colorPalette.400 ",
          textDecoration: "none ",
        },
      },
    },
  },
  variants: {
    variant: {
      plain: {
        link: {
          textDecoration: "none ",
        },
      },
    },
  },
});
