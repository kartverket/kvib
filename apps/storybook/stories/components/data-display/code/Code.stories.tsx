import { Code as KvibCode, Stack as KvibStack } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibCode> = {
  title: "Komponenter/Data Display/Code",
  component: KvibCode,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    variant: {
      description: "The variant of the badge",
      table: {
        type: { summary: "solid | subtle | outline" },
        defaultValue: { summary: "subtle" },
      },
      options: ["solid", "subtle", "outline"],
      control: "radio",
    },
    colorScheme: {
      description: "The visual color appearance of the component",
      table: {
        type: { summary: "green | blue | red | gray | orange" },
        defaultValue: { summary: "gray" },
      },
      options: ["green", "blue", "red", "gray", "orange"],
      control: "radio",
    },
    size: {
      description: "The size of the Code",
      table: {
        type: { summary: String },
      },
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibCode>;

export const Code: Story = {
  args: {},
  render: (args) => <KvibCode {...args}>$ npm install @kvib/react</KvibCode>,
};

export const CodeColors: Story = {
  args: {},
  render: (args) => (
    <KvibStack direction="row">
      <KvibCode {...args} colorScheme="orange" children="Hello world" />
      <KvibCode {...args} children="var kartverket = 'Hønefoss'" />
      <KvibCode {...args} colorScheme="red" children="console.log(kartverket)" />
      <KvibCode {...args} colorScheme="green" children="<Code>Eiendom</Code>" />
      <KvibCode {...args} colorScheme="blue" children="$ yarn add @kvib/react" />
    </KvibStack>
  ),
};

export const CodeVariants: Story = {
  args: {},
  render: (args) => (
    <KvibStack direction="row">
      <KvibCode {...args} children="Hello world" variant="outline" />
      <KvibCode {...args} children="var kartverket = 'Hønefoss'" variant="solid" />
      <KvibCode {...args} children="console.log(kartverket)" variant="subtle" />
    </KvibStack>
  ),
};
