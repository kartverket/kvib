import { defineRecipe } from "@chakra-ui/react";
import { inputRecipe } from "./input.recipe";

const { defaultVariants } = inputRecipe;

export const pinInputRecipe = defineRecipe({
  className: "kvib-pin-input",
  base: {
    bg: "red",
  },
  defaultVariants: defaultVariants,
});
