import { defineSlotRecipe } from "@chakra-ui/react";
import { pinInputAnatomy } from "@chakra-ui/react/anatomy";
import { inputTheme } from "./input";

export const pinInputTheme = defineSlotRecipe({
  className: "kvib-pin-input",
  slots: pinInputAnatomy.keys(),
  base: {
    input: {
      ...inputTheme.base,
      boxSizing: "border-box !important",
      borderRadius: "{radii.md}",
    },
  },
  variants: {
    variant: {},
  },
});
