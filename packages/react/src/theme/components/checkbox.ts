import { defineSlotRecipe } from "@chakra-ui/react";
import { checkboxAnatomy } from "@chakra-ui/react/anatomy"; // Ensure you import the correct anatomy if needed

export const checkboxTheme = defineSlotRecipe({
  slots: checkboxAnatomy.keys(), // Define the slots for the checkbox
  base: {
    root: {
      cursor: "pointer",
    },
    control: {
      borderColor: "colorPalette.500 !important",
      _checked: {
        _hover: {
          borderColor: "colorPalette.400 !important",
          backgroundColor: "colorPalette.400 !important",
        },
      },
      _invalid: {
        _checked: {
          backgroundColor: "red.500 !important",
          _hover: {
            borderColor: "red.400 !important",
            backgroundColor: "red.400 !important",
          },
        },
      },
    },
  },
  variants: {
    // Define variants if needed
  },
  compoundVariants: [], // Add compound variants if necessary
});
