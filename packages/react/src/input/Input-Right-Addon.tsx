import {
  InputRightAddon as ChakraInputRightAddon,
  InputRightAddonProps as ChakraInputRightAddonProps,
  forwardRef,
} from "@chakra-ui/react";

export const InputRightAddon = forwardRef<ChakraInputRightAddonProps, "div">(({ children, ...props }, ref) => {
  return <ChakraInputRightAddon {...props} ref={ref} children={children} />;
});
