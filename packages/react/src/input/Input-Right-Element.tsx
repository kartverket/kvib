import {
  InputRightElement as ChakraInputRightElement,
  InputRightElementProps as ChakraInputRightElementProps,
  forwardRef,
} from "@chakra-ui/react";

export const InputRightElement = forwardRef<ChakraInputRightElementProps, "div">(({ children, ...props }, ref) => {
  return (
    <ChakraInputRightElement {...props} ref={ref}>
      {children}
    </ChakraInputRightElement>
  );
});
