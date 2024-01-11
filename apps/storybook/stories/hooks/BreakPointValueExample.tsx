import { useBreakpointValue, VStack, Text, Button } from "@kvib/react/src";

export const BreakPointValueExample = () => {
  const size = useBreakpointValue(
    {
      base: "md",
      lg: "lg",
    },
    {
      // Breakpoint to use when mediaqueries cannot be used, such as in server-side rendering
      // (Defaults to 'base')
      fallback: "lg",
    },
  );

  return (
    <VStack align="flex-start">
      <Text>Resize your window to see the button size change</Text>
      <Button size={size}>Button</Button>
    </VStack>
  );
};
