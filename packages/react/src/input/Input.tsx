import { Input as ChakraInput, InputProps as ChakraInputProps, forwardRef } from "@chakra-ui/react";

export type InputProps = Omit<
  ChakraInputProps,
  | "colorScheme"
  | "errorBorderColor"
  | "focusBorderColor"
  | "htmlSize"
  | "isDisabled"
  | "isInvalid"
  | "isReadOnly"
  | "isRequired"
  | "size"
  | "variant"
> & {
  size?: "lg" | "md" | "sm" | "xs";
  variant?: "outline" | "filled" | "flushed" | "unstyled";
  isRequired?: boolean;
  isReadonly?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
};

export const Input = forwardRef<InputProps, "input">(
  ({ size = "md", variant, isRequired, isReadonly, isInvalid, isDisabled, ...props }, ref) => {
    return (
      <ChakraInput
        {...props}
        ref={ref}
        size={size}
        variant={variant}
        isRequired={isRequired}
        isReadOnly={isReadonly}
        isInvalid={isInvalid}
        isDisabled={isDisabled}
      />
    );
  }
);
