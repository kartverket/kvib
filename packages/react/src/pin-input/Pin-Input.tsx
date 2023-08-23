import { PinInput as ChakraPinInput, PinInputProps as ChakraPinInputProps } from "@chakra-ui/react";

export const PinInput = ({ size, children, ...props }: ChakraPinInputProps) => {
  return (
    <ChakraPinInput {...props} size={size}>
      {children}
    </ChakraPinInput>
  );
};
