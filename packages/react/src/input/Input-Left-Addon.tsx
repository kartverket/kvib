import {
  InputLeftAddon as ChakraInputLeftAddon,
  InputLeftAddonProps as ChakraInputLeftAddonProps,
  forwardRef,
} from "@chakra-ui/react";

export const InputLeftAddon = forwardRef<ChakraInputLeftAddonProps, "div">(({ children, ...props }, ref) => {
  return <ChakraInputLeftAddon {...props} ref={ref} children={children} />;
});
