import {
  Table as KvibTable,
  Thead as KvibThead,
  Tbody as KvibTbody,
  Tfoot as KvibTfoot,
  Tr as KvibTr,
  Th as KvibTh,
  Td as KvibTd,
  TableCaption as KvibTableCaption,
  TableContainer as KvibTableContainer,
} from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibTable> = {
  title: "Komponenter/Data Display/Table",
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

export const Table: Story = {
  args: {},
  render: (args) => (
    <KvibTableContainer>
      <KvibTable {...args}>
        <KvibTableCaption>Imperial to metric conversion factors</KvibTableCaption>
        <KvibThead>
          <KvibTr>
            <KvibTh>To convert</KvibTh>
            <KvibTh>into</KvibTh>
            <KvibTh isNumeric>multiply by</KvibTh>
          </KvibTr>
        </KvibThead>
        <KvibTbody>
          <KvibTr>
            <KvibTd>inches</KvibTd>
            <KvibTd>millimetres (mm)</KvibTd>
            <KvibTd isNumeric>25.4</KvibTd>
          </KvibTr>
          <KvibTr>
            <KvibTd>feet</KvibTd>
            <KvibTd>centimetres (cm)</KvibTd>
            <KvibTd isNumeric>30.48</KvibTd>
          </KvibTr>
          <KvibTr>
            <KvibTd>yards</KvibTd>
            <KvibTd>metres (m)</KvibTd>
            <KvibTd isNumeric>0.91444</KvibTd>
          </KvibTr>
        </KvibTbody>
        <KvibTfoot>
          <KvibTr>
            <KvibTh>To convert</KvibTh>
            <KvibTh>into</KvibTh>
            <KvibTh isNumeric>multiply by</KvibTh>
          </KvibTr>
        </KvibTfoot>
      </KvibTable>
    </KvibTableContainer>
  ),
};

export const TableVariants: Story = {
  args: { variant: "striped", colorScheme: "green" },
  render: (args) => (
    <KvibTableContainer>
      <KvibTable {...args}>
        <KvibTableCaption>Imperial to metric conversion factors</KvibTableCaption>
        <KvibThead>
          <KvibTr>
            <KvibTh>To convert</KvibTh>
            <KvibTh>into</KvibTh>
            <KvibTh isNumeric>multiply by</KvibTh>
          </KvibTr>
        </KvibThead>
        <KvibTbody>
          <KvibTr>
            <KvibTd>inches</KvibTd>
            <KvibTd>millimetres (mm)</KvibTd>
            <KvibTd isNumeric>25.4</KvibTd>
          </KvibTr>
          <KvibTr>
            <KvibTd>feet</KvibTd>
            <KvibTd>centimetres (cm)</KvibTd>
            <KvibTd isNumeric>30.48</KvibTd>
          </KvibTr>
          <KvibTr>
            <KvibTd>yards</KvibTd>
            <KvibTd>metres (m)</KvibTd>
            <KvibTd isNumeric>0.91444</KvibTd>
          </KvibTr>
        </KvibTbody>
        <KvibTfoot>
          <KvibTr>
            <KvibTh>To convert</KvibTh>
            <KvibTh>into</KvibTh>
            <KvibTh isNumeric>multiply by</KvibTh>
          </KvibTr>
        </KvibTfoot>
      </KvibTable>
    </KvibTableContainer>
  ),
};

export const TableSizes: Story = {
  args: { size: "sm" },
  render: (args) => (
    <KvibTableContainer>
      <KvibTable {...args}>
        <KvibTableCaption>Imperial to metric conversion factors</KvibTableCaption>
        <KvibThead>
          <KvibTr>
            <KvibTh>To convert</KvibTh>
            <KvibTh>into</KvibTh>
            <KvibTh isNumeric>multiply by</KvibTh>
          </KvibTr>
        </KvibThead>
        <KvibTbody>
          <KvibTr>
            <KvibTd>inches</KvibTd>
            <KvibTd>millimetres (mm)</KvibTd>
            <KvibTd isNumeric>25.4</KvibTd>
          </KvibTr>
          <KvibTr>
            <KvibTd>feet</KvibTd>
            <KvibTd>centimetres (cm)</KvibTd>
            <KvibTd isNumeric>30.48</KvibTd>
          </KvibTr>
          <KvibTr>
            <KvibTd>yards</KvibTd>
            <KvibTd>metres (m)</KvibTd>
            <KvibTd isNumeric>0.91444</KvibTd>
          </KvibTr>
        </KvibTbody>
        <KvibTfoot>
          <KvibTr>
            <KvibTh>To convert</KvibTh>
            <KvibTh>into</KvibTh>
            <KvibTh isNumeric>multiply by</KvibTh>
          </KvibTr>
        </KvibTfoot>
      </KvibTable>
    </KvibTableContainer>
  ),
};
