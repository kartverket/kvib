import {
  PinInputField as ChakraPinInputField,
  PinInputFieldProps as ChakraPinInputFieldProps,
  forwardRef,
} from "@chakra-ui/react";

export const PinInputField = forwardRef<ChakraPinInputFieldProps, "input">(({ ...props }, ref) => {
  return <ChakraPinInputField {...props} ref={ref} />;
});
