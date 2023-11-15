import { Grid as KvibGrid, GridItem } from "@kvib/react/src/layout";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibGrid> = {
  title: "Komponenter/Layout/Grid",
  component: KvibGrid,
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
type Story = StoryObj<typeof KvibGrid>;

export const Grid: Story = {
  args: { templateColumns: "repeat(5, 1fr)", gap: 6 },
  render: (args) => (
    <KvibGrid {...args}>
      <GridItem w="100%" h={10} bgColor="blue.100" />
      <GridItem w="100%" h={10} bgColor="blue.100" />
      <GridItem w="100%" h={10} bgColor="blue.100" />
      <GridItem w="100%" h={10} bgColor="blue.100" />
      <GridItem w="100%" h={10} bgColor="blue.100" />
    </KvibGrid>
  ),
};

export const GridSpanning: Story = {
  args: { h: "200px", templateRows: "repeat(2, 1fr)", templateColumns: "repeat(5, 1fr)", gap: 4 },
  render: (args) => (
    <KvibGrid {...args}>
      <GridItem rowSpan={2} colSpan={1} bg="red.400" />
      <GridItem colSpan={2} bg="orange.200" />
      <GridItem colSpan={2} bg="orange.200" />
      <GridItem colSpan={4} bg="red.400" />
    </KvibGrid>
  ),
};

export const GridStartEnd: Story = {
  args: { templateColumns: "repeat(5, 1fr)", gap: 4 },
  render: (args) => (
    <KvibGrid {...args}>
      <GridItem colSpan={2} h="10" bg="red.400" />
      <GridItem colStart={4} colEnd={6} h="10" bg="orange.200" />
    </KvibGrid>
  ),
};

export const GridTemplateAreas: Story = {
  args: {
    templateAreas: `"header header"
                  "nav main"
                  "nav footer"`,
    gridTemplateRows: "50px 1fr 30px",
    gridTemplateColumns: "150px 1fr",
    h: "200px",
    gap: "1",
    color: "blackAlpha.700",
    fontWeight: "bold",
  },
  render: (args) => (
    <KvibGrid {...args}>
      <GridItem pl="2" bg="orange.300" area={"header"}>
        Header
      </GridItem>
      <GridItem pl="2" bg="pink.300" area={"nav"}>
        Nav
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"main"}>
        Main
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </KvibGrid>
  ),
};
