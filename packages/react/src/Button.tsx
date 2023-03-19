import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

export const Button = ({ children, ...props }: ChakraButtonProps) => {
  return (
    <ChakraButton {...props} colorScheme="brand">
      {children}
    </ChakraButton>
  );
};
