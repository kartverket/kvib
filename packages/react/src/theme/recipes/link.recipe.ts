import { defineRecipe } from "@chakra-ui/react";

export const linkRecipe = defineRecipe({
  className: "kvib-link",
  base: {
    display: "inline-flex",
    alignItems: "center",
    outline: "none",
    gap: "1.5",
    cursor: "pointer",
    focusRing: "outside",
    focusRingColor: "blue.500",
  },

  variants: {
    variant: {
      underline: {
        color: "colorPalette.500",
        textDecoration: "underline",
        textUnderlineOffset: "3px",
        textDecorationColor: "currentColor/80",
        _hover: {
          textDecoration: "none",
          color: "colorPalette.400",
        },
      },
    },
  },

  defaultVariants: {
    variant: "underline",
  },
});
