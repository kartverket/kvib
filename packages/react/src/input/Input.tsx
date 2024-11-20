"use client";

import { inputRecipe } from "@/theme/recipes/input.recipe";
import type { InputProps as ChakraInputProps } from "@chakra-ui/react";
import { Input as ChakraInput, useRecipe } from "@chakra-ui/react";

export interface InputProps extends ChakraInputProps {}

export const Input = (props: InputProps) => {
  const recipe = useRecipe({ recipe: inputRecipe });
  const styles = recipe({
    key: "input",
  });

  return <ChakraInput css={styles} {...props} />;
};
