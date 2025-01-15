"use client";

import { useRecipe } from "@/hooks";
import type { InputProps as ChakraInputProps } from "@chakra-ui/react";
import { Input as ChakraInput } from "@chakra-ui/react";

export interface InputProps extends ChakraInputProps {}

export const Input = (props: InputProps) => {
  const recipe = useRecipe({
    key: "input",
  });
  const [recipeProps, restProps] = recipe.splitVariantProps(props);
  const styles = recipe(recipeProps);

  return <ChakraInput css={styles} {...restProps} />;
};
