import { defineRecipe } from "@chakra-ui/react";

export const inputRecipe = defineRecipe({
  className: "kvib-input",
  base: {
    width: "100%",
    position: "relative",
    textAlign: "start",
    _disabled: {
      layerStyle: "disabled",
    },
    height: "var(--input-height)",
    minW: "var(--input-height)",
    "--focus-color": "{colors.blue.500}",
    "--error-color": "colors.border.error",
    _invalid: {
      focusRingColor: "var(--error-color)",
      borderColor: "var(--error-color)",
    },
    focusRingColor: "var(--focus-color)",
  },

  variants: {
    size: {
      xs: {
        borderRadius: "{radii.sm}",
      },
      sm: {
        borderRadius: "{radii.sm}",
      },
      md: {
        borderRadius: "{radii.md}",
      },
      lg: {
        borderRadius: "{radii.md}",
      },
    },
    variant: {
      outline: {
        bg: "transparent",
        borderWidth: "1px",
        borderColor: "border",
        focusVisibleRing: "inside",
        transition: "border-color 0.25s",
      },
      subtle: {
        focusVisibleRing: "inside",
        // animate transition
        transition: "background-color 0.25s",
        _focus: {
          bg: "transparent",
        },
      },
      flushed: {
        bg: "transparent",
        borderBottomWidth: "1px",
        borderBottomColor: "border",
        borderRadius: "0",
        transition: "border-color 0.25s",
        px: "0",
        _focusVisible: {
          borderColor: "var(--focus-color)",
          boxShadow: "0px 1px 0px 0px var(--focus-color)",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "outline",
  },
});
