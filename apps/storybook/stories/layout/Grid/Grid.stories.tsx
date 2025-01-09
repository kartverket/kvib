import { Grid, GridItem } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Grid> = {
  title: "Komponenter/Layout/Grid",
  component: Grid,
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
      control: "number",
    },
    gap: {
      description: "Shorthand prop for gridGap",
      table: {
        type: { summary: "ResponsiveValue<string | number | (string & {})>" },
      },
      control: "number",
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
type Story = StoryObj<typeof Grid>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
Grid.displayName = "Grid";
GridItem.displayName = "GridItem";

export const Preview: Story = {
  render: args => (
    <Grid templateColumns="repeat(3, 1fr)" gap="4" {...args}>
      <GridItem h="12" bg="blue.500" />
      <GridItem h="12" bg="green.500" />
      <GridItem h="12" bg="yellow.500" />
      <GridItem h="12" bg="red.500" />
      <GridItem h="12" bg="purple.500" />
    </Grid>
  ),
};
