import {
  NumberInput as ChakraNumberInputField,
  NumberInputRootProps as ChakraNumerInputFieldProps,
} from "@chakra-ui/react";
import { forwardRef } from "react";

export const NumberInputField = forwardRef<HTMLInputElement, ChakraNumerInputFieldProps>(
  ({ children, ...props }, ref) => {
    return (
      <ChakraNumberInputField.Root {...props} ref={ref}>
        {children}
      </ChakraNumberInputField.Root>
    );
  },
);
