import { Group as ChakraInputGroup, GroupProps as ChakraInputGroupProps } from "@chakra-ui/react";
import { forwardRef } from "react";

export const InputGroup = forwardRef<HTMLDivElement, ChakraInputGroupProps>(({ children, ...props }, ref) => {
  return (
    <ChakraInputGroup {...props} ref={ref}>
      {children}
    </ChakraInputGroup>
  );
});
