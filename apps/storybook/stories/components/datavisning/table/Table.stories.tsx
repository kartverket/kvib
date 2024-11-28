import {
  Table as KvibTable,
  Table,
  TableBody,
  TableCell,
  TableColumnHeader,
  TableHeader,
  TableProps,
  TableRow,
} from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibTable> = {
  title: "Komponenter/Table",
  component: KvibTable,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "closed" },
    },
  },
  argTypes: {
    variant: {
      description: "The variant of the Table",
      table: {
        type: { summary: "line | outline" },
        defaultValue: { summary: "line" },
      },
      options: ["line", "outline"],
      control: "radio",
    },
    striped: {
      description: "Whether the Table should have striped rows",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    colorPalette: {
      description: "The visual color appearance of the component",
      table: {
        type: { summary: "green | blue | red | gray" },
        defaultValue: { summary: "gray" },
      },
      options: ["green", "blue", "red", "gray"],
      control: "radio",
    },
    size: {
      description: "The size of the Table",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibTable>;

const TableExample = (args: TableProps) => (
  <Table {...args}>
    <TableHeader>
      <TableRow>
        <TableColumnHeader>Tekstkolonne</TableColumnHeader>
        <TableColumnHeader>Numerisk</TableColumnHeader>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>Rad 1</TableCell>
        <TableCell>1</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Rad 2</TableCell>
        <TableCell>2</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const Preview: Story = {
  render: args => <TableExample {...args} />,
};
