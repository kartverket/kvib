import {
  NumberInputField as ChakraNumberInputField,
  NumberInputFieldProps as ChakraNumerInputFieldProps,
  forwardRef,
} from "@chakra-ui/react";

export const NumberInputField = forwardRef<ChakraNumerInputFieldProps, "input">(({ children, ...props }, ref) => {
  return (
    <ChakraNumberInputField {...props} ref={ref}>
      {children}
    </ChakraNumberInputField>
  );
});
