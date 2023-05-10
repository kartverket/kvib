import { Stack as KvibStack, HStack, Box } from "@kvib/react/src/layout";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibStack> = {
  title: "Komponenter/Layout/Stack",
  component: KvibStack,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibStack>;

export const Stack: Story = {
  render: (args) => (
    <HStack {...args} spacing="24px">
      <Box w="40px" h="40px" bg="yellow.200">
        1
      </Box>
      <Box w="40px" h="40px" bg="tomato">
        2
      </Box>
      <Box w="40px" h="40px" bg="pink.100">
        3
      </Box>
    </HStack>
  ),
};

export const ResponsiveStack: Story = {
  render: (args) => (
    <KvibStack {...args} direction={["column", "row"]} spacing="24px">
      <Box w="40px" h="40px" bg="yellow.200">
        1
      </Box>
      <Box w="40px" h="40px" bg="tomato">
        2
      </Box>
      <Box w="40px" h="40px" bg="pink.100">
        3
      </Box>
    </KvibStack>
  ),
};
