import { defineSlotRecipe } from "@chakra-ui/react";
import { fileUploadAnatomy } from "@chakra-ui/react/anatomy"; // Ensure you import the correct anatomy if needed

export const fileUploadTheme = defineSlotRecipe({
  slots: fileUploadAnatomy.keys(),
  base: {
    root: {
      colorPalette: "green",
    },
  },
  variants: {
    size: {
      xs: {
        root: {
          padding: "padding.px",
        },
      },
      sm: {
        root: {
          padding: "padding.2",
        },
      },
      md: {
        root: {
          padding: "padding.5",
        },
      },
      lg: {
        root: {
          padding: "padding.5",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
