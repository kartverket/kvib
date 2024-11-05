import {
  NumberInput as ChakraNumberInput,
  NumberInputRootProps as ChakraNumberInputStepperProps,
} from "@chakra-ui/react";
import { forwardRef } from "react";

export const NumberInputStepper = forwardRef<HTMLInputElement, ChakraNumberInputStepperProps>(
  ({ children, ...props }, ref) => {
    return (
      <ChakraNumberInput.Root {...props}>
        <ChakraNumberInput.Input ref={ref} />
        <ChakraNumberInput.Control>
          <ChakraNumberInput.IncrementTrigger />
          <ChakraNumberInput.DecrementTrigger />
        </ChakraNumberInput.Control>
      </ChakraNumberInput.Root>
    );
  },
);
