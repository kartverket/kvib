import { defineRecipe } from "@chakra-ui/react";
import { inputTheme } from "../components/input";

const { defaultVariants } = inputTheme;

export const pinInputRecipe = defineRecipe({
  className: "kvib-pin-input",
  base: {
    bg: "red",
  },
  defaultVariants: defaultVariants,
});
