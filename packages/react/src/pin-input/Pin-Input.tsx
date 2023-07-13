import { PinInput as ChakraPinInput, PinInputProps as ChakraPinInputProps, forwardRef } from "@chakra-ui/react";

export const PinInput = forwardRef<ChakraPinInputProps, "div">(({ size, children, ...props }) => {
  return (
    <ChakraPinInput {...props} size={size}>
      {children}
    </ChakraPinInput>
  );
});
