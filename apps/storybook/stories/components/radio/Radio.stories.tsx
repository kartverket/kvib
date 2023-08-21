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
};

const radioArgTypes = {
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
        summary:
          "whiteAlpha | blackAlpha | gray | red | orange | yellow | green | teal | blue | cyan | purple | pink | linkedin | facebook | messenger | whatsapp | twitter | telegram",
      },
      defaultValue: { summary: "blue" },
    },
    options: [
      "whiteAlpha",
      "blackAlpha",
      "gray",
      "red",
      "orange",
      "yellow",
      "green",
      "teal",
      "blue",
      "cyan",
      "purple",
      "pink",
      "linkedin",
      "facebook",
      "messenger",
      "whatsapp",
      "twitter",
      "telegram",
    ],
    control: { type: "select" },
  },
};

// const radioGroupArgTypes = {};

export default meta;
type Story = StoryObj<typeof KvibRadio>;

export const Radio: Story = {
  argTypes: radioArgTypes,
  args: { onChange: undefined },
  render: (args) => <KvibRadio {...args}>Alternativ</KvibRadio>,
};

// export const RadioGroup: Story = {
//   argTypes: radioGroupArgTypes,
//   args: {},
//   render: (args) =>
//     <KvibRadioGroup {...args}>
//       <KvibRadio>Radioknapp</KvibRadio>
//     </KvibRadioGroup>,
// };

export const Color: Story = {
  args: { size: "lg" },
  render: (args) => (
    <KvibRadioGroup>
      <KvibStack direction={"column"}>
        <KvibRadio {...args} defaultChecked colorScheme={"green"}>
          Grønn
        </KvibRadio>
        <KvibRadio {...args} defaultChecked colorScheme={"blue"}>
          Blå
        </KvibRadio>
        <KvibRadio {...args} defaultChecked colorScheme={"red"}>
          Rød
        </KvibRadio>
      </KvibStack>
    </KvibRadioGroup>
  ),
};

export const Size: Story = {
  args: { colorScheme: "green" },
  render: (args) => (
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
