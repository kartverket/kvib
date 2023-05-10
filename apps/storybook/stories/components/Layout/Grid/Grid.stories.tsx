import { Grid as KvibGrid, GridItem } from "@kvib/react/src/layout";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibGrid> = {
  title: "Komponenter/Layout/Grid",
  component: KvibGrid,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibGrid>;

export const Grid: Story = {
  render: (args) => (
    <KvibGrid {...args} templateColumns="repeat(5, 1fr)" gap={6}>
      <GridItem width="100%" height="10" backgroundColor="blue.100" />
      <GridItem width="100%" height="10" backgroundColor="blue.100" />
      <GridItem width="100%" height="10" backgroundColor="blue.100" />
      <GridItem width="100%" height="10" backgroundColor="blue.100" />
      <GridItem width="100%" height="10" backgroundColor="blue.100" />
    </KvibGrid>
  ),
};
