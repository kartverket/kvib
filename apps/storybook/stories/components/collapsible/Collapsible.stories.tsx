import { Box, Collapsible, CollapsibleContent, CollapsibleRootProps, CollapsibleTrigger } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Collapsible> = {
  title: "Komponenter/Collapsible",
  component: Collapsible,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

const CollapsibleExample = (props: CollapsibleRootProps) => (
  <Collapsible {...props}>
    <CollapsibleTrigger py={"4px"}>Vis Collapsible</CollapsibleTrigger>
    <CollapsibleContent>
      <Box padding="4" borderWidth="1px">
        Denne teksten dukker opp når man åpner en collapsible
      </Box>
    </CollapsibleContent>
  </Collapsible>
);

export const Preview: Story = {
  render: args => <CollapsibleExample {...args} />,
};
