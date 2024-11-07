import { PinInput as ChakraPinInputField, PinInputRootProps as ChakraPinInputFieldProps } from "@chakra-ui/react";
import { forwardRef } from "react";

export const PinInputField = forwardRef<HTMLInputElement, ChakraPinInputFieldProps>(({ ...props }, ref) => {
  return <ChakraPinInputField.Root {...props} ref={ref} />;
});
