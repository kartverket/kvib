import { defineRecipe } from "@chakra-ui/react";

export const selectNativeRecipe = defineRecipe({
  base: {
    display: "flex",
    alignItems: "center",
  },
  variants: {
    variant: {
      outline: {
        field: {
          borderColor: "gray.400",
        },
      },
      flushed: {
        field: {
          borderColor: "gray.400",
        },
      },
    },
  },
  defaultVariants: {
    variant: "outline",
  },
});
