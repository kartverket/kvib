import {
  NumberInput as ChakraNumberInput,
  NumberInputProps as ChakraNumberInputProps,
  forwardRef,
} from "@chakra-ui/react";

export const NumberInput = forwardRef<ChakraNumberInputProps, "div">(
  ({ isInvalid, isDisabled, children, ...props }, ref) => {
    return (
      <ChakraNumberInput {...props} ref={ref} isInvalid={isInvalid} isDisabled={isDisabled}>
        {children}
      </ChakraNumberInput>
    );
  },
);
