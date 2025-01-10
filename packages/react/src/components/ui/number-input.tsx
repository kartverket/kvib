import { NumberInput as ChakraNumberInput } from "@chakra-ui/react";
import * as React from "react";

export interface NumberInputProps extends ChakraNumberInput.RootProps {
  steppers?: boolean;
}

export const NumberInputRoot = React.forwardRef<HTMLDivElement, NumberInputProps>(function NumberInput(props, ref) {
  const { children, ...rest } = props;
  return (
    <ChakraNumberInput.Root ref={ref} variant="outline" {...rest}>
      {children}
      {props.steppers && (
        <ChakraNumberInput.Control>
          <ChakraNumberInput.IncrementTrigger />
          <ChakraNumberInput.DecrementTrigger />
        </ChakraNumberInput.Control>
      )}
    </ChakraNumberInput.Root>
  );
});

export const NumberInputField = ChakraNumberInput.Input;
export const NumberInputScrubber = ChakraNumberInput.Scrubber;
export const NumberInputLabel = ChakraNumberInput.Label;
