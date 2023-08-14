import { InputGroup as ChakraInputGroup, InputGroupProps as ChakraInputGroupProps, forwardRef } from "@chakra-ui/react";

export const InputGroup = forwardRef<ChakraInputGroupProps, "div">(({ children, ...props }, ref) => {
  return (
    <ChakraInputGroup {...props} ref={ref}>
      {children}
    </ChakraInputGroup>
  );
});
