import { HStack, Radio, RadioGroup, RadioGroupProps } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RadioGroup> = {
  title: "Komponenter/Radio",
  component: RadioGroup,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
  argTypes: {
    size: {
      description: "Size of the Radio",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    defaultChecked: {
      description: "If true, the radio wil be initially checked",
      table: {
        type: { summary: "boolean" },
      },
      defaultValue: { summary: "false" },
      control: { type: "boolean" },
    },
    disabled: {
      description: "If true, the radio will be disabled",
      table: {
        type: { summary: "boolean" },
      },
      defaultValue: { summary: "false" },
      control: { type: "boolean" },
    },
    variant: {
      description: "The variant of the radio",
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    readOnly: {
      description: "If true, the radio will be read-only",
      table: {
        type: { summary: "boolean" },
      },
      defaultValue: { summary: "false" },
      control: { type: "boolean" },
    },
    onChange: {
      description: "The function that is ran when the state of the radio changes",
      table: {
        type: { summary: "callback()" },
      },
      defaultValue: { summary: "none" },
    },
    colorPalette: {
      description: "Color of the radio",
      table: {
        type: {
          summary: "green | blue | gray | red",
        },
        defaultValue: { summary: "green" },
      },
      options: ["green", "blue", "gray", "red", "orange", "purple"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Preview: Story = {
  render: (args: RadioGroupProps) => (
    <RadioGroup defaultValue={"1"} {...args}>
      <HStack gap="6">
        <Radio value="1">Valg 1</Radio>
        <Radio value="2">Valg 2</Radio>
      </HStack>
    </RadioGroup>
  ),
};
