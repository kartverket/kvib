import { Button, Text, useBreakpointValue, VStack } from "@kvib/react/src";
import { Source } from "@storybook/blocks";
import { DocsCanvas } from "../templates/DocsCanvas";
import { breakpointStrings } from "./srcBreakpointStrings";

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
    <DocsCanvas gap="20px">
      <VStack align="flex-start">
        <Text>Resize your window to see the button size change</Text>
        <Button size={size}>Button</Button>
      </VStack>
      <Source code={breakpointStrings} dark />
    </DocsCanvas>
  );
};
