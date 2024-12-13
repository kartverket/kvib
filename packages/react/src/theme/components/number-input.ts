import { defineSlotRecipe } from "@chakra-ui/react";
import { numberInputAnatomy } from "@chakra-ui/react/anatomy";
import { inputTheme } from "./input";

export const numberInputTheme = defineSlotRecipe({
  className: "kvib-number-input",
  slots: numberInputAnatomy.keys(),
  base: {
    root: {
      "& > *": {
        boxSizing: "border-box",
      },
    },
    input: {
      ...inputTheme.base,
    },
  },
  variants: {
    variant: {
      outline: {
        input: {
          ...inputTheme.variants?.variant.outline,
        },
      },
      flushed: {
        input: {
          ...inputTheme.variants?.variant.flushed,
        },
      },
      subtle: {
        input: {
          ...inputTheme.variants?.variant.subtle,
        },
      },
    },
  },
});
