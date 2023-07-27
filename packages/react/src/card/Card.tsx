import { Card as ChakraCard, CardProps as ChakraCardProps, forwardRef } from "@chakra-ui/react";

export type CardProps = Omit<ChakraCardProps, "colorScheme">;

export const Card = forwardRef<CardProps, "div">(({ ...props }, ref) => {
  return <ChakraCard {...props} ref={ref} />;
});
