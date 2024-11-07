import { NumberInput as ChakraNumberInput, NumberInputRootProps as ChakraNumberInputProps } from "@chakra-ui/react";
import { forwardRef } from "react";

export const NumberInput = forwardRef<HTMLDivElement, ChakraNumberInputProps>(
  ({ isInvalid, isDisabled, children, ...props }, ref) => {
    return (
      <ChakraNumberInput.Root {...props} ref={ref} isInvalid={isInvalid} isDisabled={isDisabled}>
        {children}
      </ChakraNumberInput.Root>
    );
  },
);
