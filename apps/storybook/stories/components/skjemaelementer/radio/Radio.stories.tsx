import { HStack, Radio, RadioGroup, RadioGroupProps } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RadioGroup> = {
  title: "Komponenter/Radio",
  component: RadioGroup,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
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
    inputProps: {
      description: "Additional props forwarded to the input element",
      table: {
        type: { summary: "" },
      },
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
    focusable: {
      description: "If true, and isDisabled is true, the radio will remain focusable but not interactive",
      table: {
        type: { summary: "boolean" },
      },
      defaultValue: { summary: "false" },
      control: { type: "boolean" },
    },
    checked: {
      description:
        "If true, the radio will be set as checked. You need to pass onChange to update its value (since it is controlled)",
      table: {
        type: { summary: "boolean" },
      },
      defaultValue: { summary: "false" },
      control: { type: "boolean" },
    },
    invalid: {
      description: "If true, the radio will be invalid. Sets 'aria-invalid' to true",
      table: {
        type: { summary: "boolean" },
      },
      defaultValue: { summary: "false" },
      control: { type: "boolean" },
    },
    readOnly: {
      description: "If true, the radio will be read-only",
      table: {
        type: { summary: "boolean" },
      },
      defaultValue: { summary: "false" },
      control: { type: "boolean" },
    },
    required: {
      description: "If true, the radio button will be required. Sets 'aria-required' to true",
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
