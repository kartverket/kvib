import { Card as ChakraCard, CardProps as ChakraCardProps, forwardRef } from "@chakra-ui/react";

export const Card = forwardRef<ChakraCardProps, "div">(({ ...props }, ref) => {
  return <ChakraCard {...props} ref={ref} />;
});
