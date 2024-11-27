import { defineSlotRecipe } from "@chakra-ui/react";
import { tableAnatomy } from "@chakra-ui/react/anatomy";

export const tableTheme = defineSlotRecipe({
  slots: tableAnatomy.keys(),
  base: {
    root: {
      colorPalette: "green",
    },
  },
  variants: {
    striped: {
      true: {
        row: {
          "&:nth-of-type(odd) td": {
            bg: "colorPalette.50 !important",
          },
        },
      },
    },
  },
});
