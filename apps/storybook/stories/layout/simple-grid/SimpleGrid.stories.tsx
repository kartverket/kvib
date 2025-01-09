import { Box, SimpleGrid } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SimpleGrid> = {
  title: "Komponenter/Layout/Simple Grid",
  component: SimpleGrid,
  parameters: {
    docs: {
      story: { inline: true },
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
type Story = StoryObj<typeof SimpleGrid>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
SimpleGrid.displayName = "SimpleGrid";
Box.displayName = "Box";

export const Preview: Story = {
  args: {
    columns: 3,
    gap: "5",
  },
  render: args => (
    <SimpleGrid {...args}>
      <Box bg="green.100" h="2rem" />
      <Box bg="blue.100" h="2rem" />
      <Box bg="red.100" h="2rem" />
      <Box bg="orange.100" h="2rem" />
      <Box bg="purple.100" h="2rem" />
    </SimpleGrid>
  ),
};
