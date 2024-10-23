import { Radio as KvibRadio, RadioGroup as KvibRadioGroup, Stack as KvibStack } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibRadio> = {
  title: "Komponenter/Radio",
  component: KvibRadio,
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
    spacing: {
      description: "The space between the radio icon and its text",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    aria_describedby: {
      description: "Refers to the id of the radio's label",
      table: {
        type: { summary: "string" },
        control: { type: "boolean" },
      },
    },
    id: {
      description: "Refers to the id of the radio",
      table: {
        type: { summary: "string" },
        control: { type: "text" },
      },
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
    isDisabled: {
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
    isFocusable: {
      description: "If true, and isDisabled is true, the radio will remain focusable but not interactive",
      table: {
        type: { summary: "boolean" },
      },
      defaultValue: { summary: "false" },
      control: { type: "boolean" },
    },
    isChecked: {
      description:
        "If true, the radio will be set as checked. You need to pass onChange to update its value (since it is controlled)",
      table: {
        type: { summary: "boolean" },
      },
      defaultValue: { summary: "false" },
      control: { type: "boolean" },
    },
    isInvalid: {
      description: "If true, the radio will be invalid. Sets 'aria-invalid' to true",
      table: {
        type: { summary: "boolean" },
      },
      defaultValue: { summary: "false" },
      control: { type: "boolean" },
    },
    isReadOnly: {
      description: "If true, the radio will be read-only",
      table: {
        type: { summary: "boolean" },
      },
      defaultValue: { summary: "false" },
      control: { type: "boolean" },
    },
    isRequired: {
      description: "If true, the radio button will be required. Sets 'aria-required' to true",
      table: {
        type: { summary: "boolean" },
      },
      defaultValue: { summary: "false" },
      control: { type: "boolean" },
    },
    name: {
      description: "The name of the input field in a radio",
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    onChange: {
      description: "The function that is ran when the state of the radio changes",
      table: {
        type: { summary: "callback()" },
      },
      defaultValue: { summary: "none" },
    },
    colorScheme: {
      description: "Color of the radio",
      table: {
        type: {
          summary: "green | blue | gray | red | orange | purple",
        },
        defaultValue: { summary: "Blue" },
      },
      options: ["green", "blue", "gray", "red", "orange", "purple"],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibRadio>;

export const Preview: Story = {
  args: { onChange: undefined },
  render: args => (
    <KvibRadioGroup defaultValue={"1"}>
      <KvibStack direction={"row"}>
        <KvibRadio {...args} value={"1"}>
          En
        </KvibRadio>
        <KvibRadio {...args} value={"2"}>
          To
        </KvibRadio>
        <KvibRadio {...args} value={"3"}>
          Tre
        </KvibRadio>
      </KvibStack>
    </KvibRadioGroup>
  ),
};

export const Color: Story = {
  args: { size: "lg" },
  render: args => (
    <KvibRadioGroup defaultValue="green">
      <KvibStack direction={"row"}>
        <KvibRadio {...args} value={"green"} colorScheme={"green"}>
          Grønn
        </KvibRadio>
        <KvibRadio {...args} value={"blue"} colorScheme={"blue"}>
          Blå
        </KvibRadio>
      </KvibStack>
    </KvibRadioGroup>
  ),
};

export const Size: Story = {
  args: { colorScheme: "green" },
  render: args => (
    <KvibRadioGroup defaultValue="3">
      <KvibStack>
        <KvibRadio {...args} size={"sm"} value="1">
          sm
        </KvibRadio>
        <KvibRadio {...args} size={"md"} value="2">
          md
        </KvibRadio>
        <KvibRadio {...args} size={"lg"} value="3">
          lg
        </KvibRadio>
      </KvibStack>
    </KvibRadioGroup>
  ),
};

export const State: Story = {
  args: { onChange: undefined },
  render: args => (
    <KvibRadioGroup defaultValue={"disabled"}>
      <KvibStack direction={"row"}>
        <KvibRadio {...args} value={"1"}>
          Vanlig
        </KvibRadio>
        <KvibRadio {...args} value={"disabled"} isDisabled>
          Disabled
        </KvibRadio>
        <KvibRadio {...args} value={"3"} isInvalid>
          Invalid
        </KvibRadio>
      </KvibStack>
    </KvibRadioGroup>
  ),
};
