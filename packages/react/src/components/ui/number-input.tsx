import { useRecipe } from "@/hooks";
import { InputProps } from "@/input";
import { NumberInput as ChakraNumberInput } from "@chakra-ui/react";
import * as React from "react";
import { Merge } from "../utils";

export interface NumberInputProps extends ChakraNumberInput.RootProps {}

export const NumberInputRoot = React.forwardRef<HTMLDivElement, NumberInputProps>(function NumberInput(props, ref) {
  const { children, ...rest } = props;
  const recipe = useRecipe({ key: "numberInput" });
  const [recipeProps] = recipe.splitVariantProps(props);
  const styles = recipe(recipeProps);

  return (
    <ChakraNumberInput.Root ref={ref} {...rest} css={styles}>
      {children}
      <ChakraNumberInput.Control>
        <ChakraNumberInput.IncrementTrigger />
        <ChakraNumberInput.DecrementTrigger />
      </ChakraNumberInput.Control>
    </ChakraNumberInput.Root>
  );
});

interface NumberInputFieldProps extends Merge<InputProps, ChakraNumberInput.InputProps> {}

export const NumberInputField = React.forwardRef<HTMLInputElement, NumberInputFieldProps>(
  function NumberInputField(props, ref) {
    return <ChakraNumberInput.Input ref={ref} {...props} />;
  },
);

export const NumberInputScruber = ChakraNumberInput.Scrubber;
export const NumberInputLabel = ChakraNumberInput.Label;
