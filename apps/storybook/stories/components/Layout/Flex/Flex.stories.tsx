import { Center, Box, Flex as KvibFlex, Spacer } from "@kvib/react/src/components/layout";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibFlex> = {
  title: "Komponenter/Layout/Flex",
  component: KvibFlex,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    centerContent: {
      description: "If `true`, container will center its children regardless of their width.",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibFlex>;

export const Flex: Story = {
  render: (args) => (
    <KvibFlex {...args}>
      <Center width="100px" backgroundColor="green.100">
        {/* @todo: erstatte <p></p> med <Text/> */}
        <p>Text 1</p>
      </Center>
      <Center width="100px" height="150px" backgroundColor="blue.100">
        <p>Text 2</p>
      </Center>
      <Box flex="1" backgroundColor="yellow.100">
        <p>Text 3</p>
      </Box>
    </KvibFlex>
  ),
};

export const FlexWithSpacer: Story = {
  render: (args) => (
    <KvibFlex {...args}>
      <Box padding="4" backgroundColor="green.100">
        Box 1
      </Box>
      <Spacer />
      <Box padding="4" backgroundColor="blue.100">
        Box 2
      </Box>
    </KvibFlex>
  ),
};
