import { Code as KvibCode, Stack as KvibStack } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibCode> = {
  title: "Komponenter/Data Display/Code",
  component: KvibCode,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
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
  },
};

export default meta;
type Story = StoryObj<typeof KvibCode>;

export const Code: Story = {
  args: {},
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
  render: (args) => <KvibCode {...args}>$ npm install @kvib/react</KvibCode>,
};

export const CodeAppearance: Story = {
  args: { width: "fit-content" },
  render: (args) => (
    <KvibStack gap="1rem">
      <KvibCode {...args} children="console.log(kartverket)" variant="subtle" />
      <KvibCode {...args} colorScheme="blue" children="Hello world" variant="outline" />
      <KvibCode {...args} colorScheme="red" children="var kartverket = 'Hønefoss'" variant="solid" />
    </KvibStack>
  ),
};
