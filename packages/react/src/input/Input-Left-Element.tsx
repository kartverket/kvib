import {
  InputLeftElement as ChakraInputLeftElement,
  InputLeftElementProps as ChakraInputLeftElementProps,
  forwardRef,
} from "@chakra-ui/react";

export const InputLeftElement = forwardRef<ChakraInputLeftElementProps, "div">(({ children, ...props }, ref) => {
  return (
    <ChakraInputLeftElement {...props} ref={ref}>
      {children}
    </ChakraInputLeftElement>
  );
});
