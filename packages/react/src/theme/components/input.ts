import { defineRecipe } from "@chakra-ui/react";

export const inputTheme = defineRecipe({
  base: {
    transition: "outline 0.25s ease-in-out",
    borderRadius: "md",
    outline: "{borders.1px}",
    outlineColor: "gray.200",
    "--focus-ring-width": "2px",
    border: "none",
    _focus: {
      boxShadow: "none",
    },
  },
  variants: {
    size: {
      "2xs": {
        textStyle: "xs",
        px: "2",
        "--input-height": "sizes.6",
      },
      xs: {
        textStyle: "xs",
        px: "2",
        "--input-height": "sizes.7",
      },
      sm: {
        textStyle: "sm",
        px: "2.5",
        "--input-height": "sizes.8",
      },
      md: {
        textStyle: "sm",
        px: "3",
        "--input-height": "sizes.9",
      },
      lg: {
        textStyle: "md",
        px: "4",
        "--input-height": "sizes.10",
      },
      xl: {
        textStyle: "md",
        px: "4.5",
        "--input-height": "sizes.11",
      },
      "2xl": {
        textStyle: "lg",
        px: "5",
        "--input-height": "sizes.15",
      },
    },
    variant: {
      outline: {
        outlineColor: "gray.400",
        boxShadow: "none",
        _focusVisible: { outlineColor: "blue.500", boxShadow: "none" },
        _active: {
          outlineColor: "blue.500",
          boxShadow: "none",
        },
        _focus: {
          outlineColor: "blue.500",
          boxShadow: "none",
        },
      },
      flushed: {
        outlineColor: "transparent",
        boxShadow: "0 1px 0 {currentColor}",
        _focus: {
          outlineColor: "transparent",
          boxShadow: "0 2px 0 {colors.blue.500}",
        },
      },
      subtle: {
        outlineColor: "transparent",
        _focus: {
          bg: "transparent",
        },
      },
    },
  },
});
