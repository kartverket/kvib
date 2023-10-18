import { Input as ChakraInput, InputProps as ChakraInputProps, forwardRef } from "@chakra-ui/react";

export const Search = forwardRef<ChakraInputProps, "input">(
  ({ id, size, variant, type = "search", isDisabled, isInvalid, ...props }, ref) => {
    return (
      <ChakraInput
        {...props}
        ref={ref}
        size={size}
        type={type}
        variant={variant}
        isInvalid={isInvalid}
        isDisabled={isDisabled}
      />
    );
  },
);
