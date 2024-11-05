import { PinInput as ChakraPinInput, PinInputRootProps as ChakraPinInputProps } from "@chakra-ui/react";

export const PinInput = ({ size, children, ...props }: ChakraPinInputProps) => {
  return (
    <ChakraPinInput.Root {...props} size={size}>
      {children}
    </ChakraPinInput.Root>
  );
};
