import { Grid as KvibGrid, GridItem } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof GridItem> = {
  title: "Layout/Grid/GridItem",
  component: GridItem,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
  argTypes: {
    area: {
      description: "Shorthand prop for gridArea",
      table: {
        type: { summary: "ResponsiveValue<GridArea>" },
      },
      control: "text",
    },
    colEnd: {
      description: "The column number where the grid item should end",
      table: {
        type: { summary: "ResponsiveValue<number | 'auto'>" },
      },
      control: { type: "text" }, // Custom control type
    },
    colSpan: {
      description: "The number of columns the grid item should span",
      table: {
        type: { summary: "ResponsiveValue<number | 'auto'>" },
      },
      control: { type: "text" }, // Custom control type
    },
    colStart: {
      description: "The column number the grid item should start",
      table: {
        type: { summary: "ResponsiveValue<number | 'auto'>" },
      },
      control: { type: "text" }, // Custom control type
    },
    rowEnd: {
      description: "The row number where the grid item should end",
      table: {
        type: { summary: "ResponsiveValue<number | 'auto'>" },
      },
      control: { type: "text" }, // Custom control type
    },
    rowSpan: {
      description: "The number of rows the grid item should span",
      table: {
        type: { summary: "ResponsiveValue<number | 'auto'>" },
      },
      control: { type: "text" }, // Custom control type
    },
    rowStart: {
      description: "The row number the grid item should start",
      table: {
        type: { summary: "ResponsiveValue<number | 'auto'>" },
      },
      control: { type: "text" }, // Custom control type
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibGrid>;

export const Grid: Story = {
  args: {},
  render: (args) => (
    <KvibGrid templateColumns="repeat(5, 1fr)" gap={6}>
      <GridItem {...args} w="100%" h={10} bgColor="blue.100" />
      <GridItem {...args} w="100%" h={10} bgColor="blue.100" />
      <GridItem {...args} w="100%" h={10} bgColor="blue.100" />
      <GridItem {...args} w="100%" h={10} bgColor="blue.100" />
      <GridItem {...args} w="100%" h={10} bgColor="blue.100" />
    </KvibGrid>
  ),
};
