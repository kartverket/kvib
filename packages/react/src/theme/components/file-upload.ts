import { defineSlotRecipe } from "@chakra-ui/react";
import { fileUploadAnatomy } from "@chakra-ui/react/anatomy"; // Ensure you import the correct anatomy if needed

export const fileUploadTheme = defineSlotRecipe({
  slots: fileUploadAnatomy.keys(),
  variants: {
    size: {
      xs: {
        root: {
          padding: "padding.px !important",
        },
      },
      sm: {
        root: {
          padding: "padding.2 !important",
        },
      },
      md: {
        root: {
          padding: "padding.5 !important",
        },
      },
      lg: {
        root: {
          padding: "padding.5 !important",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
