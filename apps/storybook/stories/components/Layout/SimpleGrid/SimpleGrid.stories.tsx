import { SimpleGrid as KvibSimpleGrid, Box } from "@kvib/react/src/layout";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibSimpleGrid> = {
  title: "Komponenter/Layout/SimpleGrid",
  component: KvibSimpleGrid,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
  argTypes: {
    autoColumns: {
      description: "Shorthand prop for gridAutoColumns",
      table: {
        type: { summary: "ResponsiveValue<GridAutoColumns<0 | (string & {})>>" },
      },
      control: "text",
    },
    autoFlow: {
      description: "Shorthand prop for gridAutoFlow",
      table: {
        type: { summary: "ResponsiveValue<GridAutoFlow>" },
      },
      control: "text",
    },
    autoRows: {
      description: "Shorthand prop for gridAutoRows",
      table: {
        type: { summary: "ResponsiveValue<GridAutoRows<0 | (string & {})>>" },
      },
      control: "text",
    },
    column: {
      description: "Shorthand prop for gridColumn",
      table: {
        type: { summary: "ResponsiveValue<GridColumn>" },
      },
      control: "text",
    },
    columnGap: {
      description: "Shorthand prop for gridColumnGap",
      table: {
        type: { summary: "ResponsiveValue<string | number | (string & {})>" },
      },
      control: "text",
    },
    columns: {
      description: "The number of columns",
      table: {
        type: { summary: "ResponsiveValue<number>" },
      },
      control: "number",
    },
    gap: {
      description: "Shorthand prop for gridGap",
      table: {
        type: { summary: "ResponsiveValue<string | number | (string & {})>" },
      },
      control: "text",
    },
    minChildWidth: {
      description:
        "The width at which child elements will break into columns. Pass a number for pixel values or a string for any other valid CSS length.",
      table: {
        type: { summary: "ResponsiveValue<string | number | (string & {})>" },
      },
      control: "text",
    },
    row: {
      description: "Shorthand prop for gridRow",
      table: {
        type: { summary: "ResponsiveValue<GridRow>" },
      },
      control: "text",
    },
    rowGap: {
      description: "Shorthand prop for gridRowGap",
      table: {
        type: { summary: "ResponsiveValue<string | number | (string & {})>" },
      },
      control: "text",
    },
    spacing: {
      description: "The gap between the grid items",
      table: {
        type: { summary: "ResponsiveValue<string | number | (string & {})>" },
      },
      control: "number",
    },
    spacingX: {
      description: "The column gap between the grid items",
      table: {
        type: { summary: "ResponsiveValue<string | number | (string & {})>" },
      },
      control: "text",
    },
    spacingY: {
      description: "The row gap between the grid items",
      table: {
        type: { summary: "ResponsiveValue<string | number | (string & {})>" },
      },
      control: "text",
    },
    templateAreas: {
      description: "Shorthand prop for gridTemplateAreas",
      table: {
        type: { summary: "ResponsiveValue<GridTemplateAreas>" },
      },
      control: "text",
    },
    templateColumns: {
      description: "Shorthand prop for gridTemplateColumns",
      table: {
        type: { summary: "ResponsiveValue<GridTemplateColumns<0 | (string & {})>>" },
      },
      control: "text",
    },
    templateRows: {
      description: "Shorthand prop for gridTemplateRows",
      table: {
        type: { summary: "ResponsiveValue<GridTemplateRows<0 | (string & {})>>" },
      },
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibSimpleGrid>;

export const SimpleGrid: Story = {
  args: {
    columns: 3,
    spacing: 10,
  },
  render: (args) => (
    <KvibSimpleGrid {...args}>
      <Box bg="green.100" height="80px"></Box>
      <Box bg="green.100" height="80px"></Box>
      <Box bg="green.100" height="80px"></Box>
      <Box bg="green.100" height="80px"></Box>
      <Box bg="green.100" height="80px"></Box>
    </KvibSimpleGrid>
  ),
};

export const SimpleGridResponsiveArray: Story = {
  args: {
    columns: [2, null, 3],
    spacing: 5,
  },
  render: (args) => (
    <KvibSimpleGrid {...args}>
      <Box bg="blue.100" height="80px"></Box>
      <Box bg="blue.100" height="80px"></Box>
      <Box bg="blue.100" height="80px"></Box>
      <Box bg="blue.100" height="80px"></Box>
      <Box bg="blue.100" height="80px"></Box>
    </KvibSimpleGrid>
  ),
};

export const SimpleGridResponsive: Story = {
  args: {
    minChildWidth: "120px",
    spacing: "40px",
  },
  render: (args) => (
    <KvibSimpleGrid {...args}>
      <Box bg="red.100" height="80px"></Box>
      <Box bg="red.100" height="80px"></Box>
      <Box bg="red.100" height="80px"></Box>
      <Box bg="red.100" height="80px"></Box>
      <Box bg="red.100" height="80px"></Box>
      <Box bg="red.100" height="80px"></Box>
    </KvibSimpleGrid>
  ),
};

export const SimpleGridSpacing: Story = {
  args: {
    columns: 2,
    spacingX: "60px",
    spacingY: "10px",
  },
  render: (args) => (
    <KvibSimpleGrid {...args}>
      <Box bg="purple.100" height="80px"></Box>
      <Box bg="purple.100" height="80px"></Box>
      <Box bg="purple.100" height="80px"></Box>
      <Box bg="purple.100" height="80px"></Box>
      <Box bg="purple.100" height="80px"></Box>
      <Box bg="purple.100" height="80px"></Box>
    </KvibSimpleGrid>
  ),
};
