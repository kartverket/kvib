import { Input as ChakraInput, InputProps as ChakraInputProps, forwardRef } from "@chakra-ui/react";

export const Search = forwardRef<ChakraInputProps, "input">(
  ({ id, colorScheme, size, variant, type = "search", isInvalid, isDisabled, ...props }, ref) => {
    return (
      <ChakraInput
        {...props}
        id={id}
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
