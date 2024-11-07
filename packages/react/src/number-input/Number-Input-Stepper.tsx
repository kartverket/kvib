import {
  NumberInputDecrementTrigger as ChakraNumberInputDecrementStepper,
  NumberInputIncrementTrigger as ChakraNumberInputIncrementStepper,
  NumberInput as ChakraNumberInputStepper,
  NumberInputRootProps as ChakraNumberInputStepperProps,
} from "@chakra-ui/react";
import { forwardRef } from "react";

export const NumberInputStepper = forwardRef<HTMLInputElement, ChakraNumberInputStepperProps>(
  ({ children, ...props }, ref) => {
    return (
      <ChakraNumberInputStepper.Root {...props} ref={ref}>
        <ChakraNumberInputIncrementStepper />
        <ChakraNumberInputDecrementStepper />
      </ChakraNumberInputStepper.Root>
    );
  },
);
