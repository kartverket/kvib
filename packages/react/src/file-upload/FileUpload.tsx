import { Input as ChakraInput, InputProps as ChakraInputProps, forwardRef, useStyleConfig } from "@chakra-ui/react";

export const FileUpload = forwardRef<ChakraInputProps, "input">(
  ({ size, variant, type = "file", isRequired, isInvalid, isDisabled, ...props }, ref) => {
    const styles = useStyleConfig("FileUpload", props);

    return (
      <ChakraInput
        {...props}
        __css={{ ...styles }}
        ref={ref}
        size={size}
        type={type}
        variant={variant}
        isRequired={isRequired}
        isInvalid={isInvalid}
        isDisabled={isDisabled}
      />
    );
  },
);
