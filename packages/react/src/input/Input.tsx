import { Input as ChakraInput, InputProps as ChakraInputProps, forwardRef } from "@chakra-ui/react";

export const Input = forwardRef<ChakraInputProps, "input">(
  ({ size, variant, isRequired, isReadOnly, isInvalid, isDisabled, ...props }, ref) => {
    return (
      <ChakraInput
        {...props}
        ref={ref}
        size={size}
        variant={variant}
        isRequired={isRequired}
        isReadOnly={isReadOnly}
        isInvalid={isInvalid}
        isDisabled={isDisabled}
      />
    );
  }
);
