import { useRecipe } from "@/hooks";
import { NumberInput as ChakraNumberInput } from "@chakra-ui/react";
import * as React from "react";

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

export const NumberInputField = ChakraNumberInput.Input;
export const NumberInputScruber = ChakraNumberInput.Scrubber;
export const NumberInputLabel = ChakraNumberInput.Label;
