import { Box, Center, Flex as KvibFlex, Text } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibFlex> = {
  title: "Komponenter/Flex",
  component: KvibFlex,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibFlex>;

export const Preview: Story = {
  render: args => (
    <KvibFlex {...args}>
      <Center width="100px" backgroundColor="green.100">
        <Text>Text 1</Text>
      </Center>
      <Center width="100px" height="150px" backgroundColor="blue.100">
        <Text>Text 2</Text>
      </Center>
      <Box flex="1" backgroundColor="yellow.100">
        <Text>Text 3</Text>
      </Box>
    </KvibFlex>
  ),
};
