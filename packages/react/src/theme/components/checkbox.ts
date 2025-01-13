import { defineSlotRecipe } from "@chakra-ui/react";
import { checkboxAnatomy } from "@chakra-ui/react/anatomy";

export const checkboxTheme = defineSlotRecipe({
  slots: checkboxAnatomy.keys(),
  base: {
    root: {
      colorPalette: "green",
      cursor: "pointer",
    },
    control: {
      borderWidth: "2px",
      borderColor: "colorPalette.500",
      _checked: {
        _hover: {
          borderColor: "colorPalette.400",
          backgroundColor: "colorPalette.400",
        },
      },
      _invalid: {
        _checked: {
          backgroundColor: "red.500",
          _hover: {
            borderColor: "red.400",
            backgroundColor: "red.400",
          },
        },
      },
    },
  },
  defaultVariants: {
    colorPalette: "green",
  },
});
