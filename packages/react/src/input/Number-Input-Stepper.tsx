import {
  NumberInputStepper as ChakraNumberInputStepper,
  NumberInputStepperProps as ChakraNumberInputStepperProps,
  NumberIncrementStepper as ChakraNumberInputIncrementStepper,
  NumberDecrementStepper as ChakraNumberInputDecrementStepper,
  forwardRef,
} from "@chakra-ui/react";

export const NumberInputStepper = forwardRef<ChakraNumberInputStepperProps, "input">(({ children, ...props }, ref) => {
  return (
    <ChakraNumberInputStepper {...props} ref={ref}>
      <ChakraNumberInputIncrementStepper />
      <ChakraNumberInputDecrementStepper />
    </ChakraNumberInputStepper>
  );
});
