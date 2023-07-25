import {
  InputLeftAddon as ChakraInputLeftAddon,
  InputLeftAddonProps as ChakraInputLeftAddonProps,
  forwardRef,
} from "@chakra-ui/react";

export const InputLeftAddon = forwardRef<ChakraInputLeftAddonProps, "input">(({ children, ...props }, ref) => {
  return <ChakraInputLeftAddon {...props} ref={ref} children={children} />;
});
