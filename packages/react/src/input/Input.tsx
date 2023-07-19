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
  /**
   * @default false
   */
  isRequired?: boolean;
  /**
   * @default false
   */
  isReadOnly?: boolean;
  /**
   * @default false
   */
  isInvalid?: boolean;
  /**
   * @default false
   */
  isDisabled?: boolean;
};

export const Input = forwardRef<InputProps, "input">(
  ({ size = "md", variant, isRequired, isReadOnly, isInvalid, isDisabled, ...props }, ref) => {
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
