import { useBreakpointValue, VStack, Text } from "@kvib/react";
import { Button } from "@chakra-ui/react";

export const BreakPointValueExample = () => {
  const variant = useBreakpointValue(
    {
      base: "outline",
      md: "solid",
    },
    {
      // Breakpoint to use when mediaqueries cannot be used, such as in server-side rendering
      // (Defaults to 'base')
      fallback: "md",
    },
  );

  return (
    <VStack align="flex-start">
      <Text>Resize your window to see the button variant change</Text>
      <Button colorScheme="green" variant={variant}>
        Button
      </Button>
    </VStack>
  );
};
