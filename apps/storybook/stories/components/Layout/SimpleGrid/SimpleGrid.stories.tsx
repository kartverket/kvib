import { SimpleGrid as KvibSimpleGrid, Box } from "@kvib/react/src/layout";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibSimpleGrid> = {
  title: "Komponenter/Layout/SimpleGrid",
  component: KvibSimpleGrid,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibSimpleGrid>;

export const SimpleGrid: Story = {
  render: (args) => (
    <KvibSimpleGrid {...args} columns={2} spacing={10}>
      <Box backgroundColor="green.100" height="80px"></Box>
      <Box backgroundColor="green.100" height="80px"></Box>
      <Box backgroundColor="green.100" height="80px"></Box>
      <Box backgroundColor="green.100" height="80px"></Box>
      <Box backgroundColor="green.100" height="80px"></Box>
    </KvibSimpleGrid>
  ),
};

export const ResponsiveSimpleGrid: Story = {
  render: (args) => (
    <KvibSimpleGrid {...args} minChildWidth="120px" spacing="40px">
      <Box bg="red.100" height="80px"></Box>
      <Box bg="red.100" height="80px"></Box>
      <Box bg="red.100" height="80px"></Box>
      <Box bg="red.100" height="80px"></Box>
      <Box bg="red.100" height="80px"></Box>
      <Box bg="red.100" height="80px"></Box>
    </KvibSimpleGrid>
  ),
};
