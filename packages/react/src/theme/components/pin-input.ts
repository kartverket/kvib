import { defineSlotRecipe } from "@chakra-ui/react";
import { pinInputAnatomy } from "@chakra-ui/react/anatomy";
import { inputTheme } from "./input";

export const pinInputTheme = defineSlotRecipe({
  className: "kvib-pin-input",
  slots: pinInputAnatomy.keys(),
  base: {
    input: {
      ...inputTheme.base,
    },
  },
  variants: {
    size: {
      sm: {
        input: {
          ...inputTheme.variants?.size.sm,
        },
      },
      md: {
        input: {
          ...inputTheme.variants?.size.md,
        },
      },
      lg: {
        input: {
          ...inputTheme.variants?.size.lg,
        },
      },
    },
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
