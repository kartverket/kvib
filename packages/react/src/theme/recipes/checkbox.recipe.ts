import { defineSlotRecipe } from "@chakra-ui/react";

export const checkboxSlotRecipe = defineSlotRecipe({
  className: "kvib-checkbox",
  slots: ["root", "control", "label"],
  base: {
    root: {
      _hover: {
        cursor: "pointer",
      },
    },
    control: {
      borderWidth: "2px",
      _checked: {
        _hover: {
          borderColor: "colorPalette.400",
          bg: "colorPalette.400",
        },
      },
      _invalid: {
        _checked: {
          bg: "bg.500",
          _hover: {
            borderColor: "red.400",
            bg: "red.400",
          },
        },
      },
    },
  },
  variants: {
    size: {
      sm: {
        control: {
          boxSize: "0.65rem",
        },
        label: {
          textStyle: "sm",
        },
      },
      md: {
        control: {
          boxSize: "0.75rem",
        },
        label: {
          textStyle: "md",
        },
      },
      lg: {
        control: {
          boxSize: "0.9rem",
        },
        label: {
          textStyle: "lg",
        },
      },
    },
    variant: {
      solid: {
        control: {
          borderColor: "colorPalette.500",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "solid",
  },
});
