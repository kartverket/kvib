import {
  Table as KvibTable,
  TableBody as KvibTbody,
  TableCell as KvibTd,
  TableColumnHeader as KvibTh,
  TableRow as KvibTr,
} from "@kvib/react/src";
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
        type: { summary: "simple | striped | unstyled" },
        defaultValue: { summary: "simple" },
      },
      options: ["simple", "striped", "unstyled"],
      control: "radio",
    },
    colorScheme: {
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

export const Preview: Story = {
  render: args => (
    <>
      <KvibTable {...args}>
        <KvibTable>
          <KvibTr>
            <KvibTh>Tekstkolonne</KvibTh>
            <KvibTh>Numerisk</KvibTh>
          </KvibTr>
        </KvibTable>
        <KvibTbody>
          <KvibTr>
            <KvibTd>Rad 1</KvibTd>
            <KvibTd>1</KvibTd>
          </KvibTr>
          <KvibTr>
            <KvibTd>Rad 2</KvibTd>
            <KvibTd>2</KvibTd>
          </KvibTr>
        </KvibTbody>
      </KvibTable>
    </>
  ),
};
