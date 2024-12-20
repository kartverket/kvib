import { Switch as KvibSwitch, SwitchProps } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibSwitch> = {
  title: "Komponenter/Switch",
  component: KvibSwitch,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    "aria-describedby": {
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },

    "aria-invalid": {
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },

    "aria-label": {
      description: "Defines the string that labels the checkbox element.",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },

    "aria-labelledby": {
      description: "Refers to the id of the element that labels the checkbox element.",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },

    colorScheme: {
      description: "The visual color appearance of the badge",
      table: {
        type: { summary: "green | blue | red | gray" },
        defultValue: { summary: "gray" },
      },
      options: ["green", "blue", "red", "gray"],
      control: "radio",
    },
    defaultChecked: {
      description: "If true, the checkbox will be initially checked.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    id: {
      description: "id assigned to input",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    isChecked: {
      description:
        "If true, the checkbox will be checked. You'll need to pass onChange to update its value (since it is now controlled)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    isDisabled: {
      description: "If true, the checkbox will be disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    isFocusable: {
      description: "If true and isDisabled is passed, the checkbox will remain tabbable but not interactive",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    isInvalid: {
      description: "If true, the checkbox is marked as invalid. Changes style of unchecked state.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    isReadOnly: {
      description: "If true, the checkbox will be readonly",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    isRequired: {
      description: "If true, the checkbox input is marked as required, and required attribute will be added",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    name: {
      description: "The name of the input field in a checkbox (Useful for form submission).",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    onBlur: {
      description: "The callback invoked when the checkbox is blurred (loses focus)",
      table: {
        type: { summary: "(event: FocusEvent<HTMLInputElement, Element>) => void" },
      },
    },
    onChange: {
      description: "The callback invoked when the checked state of the Checkbox changes.",
      table: {
        type: { summary: "(event: ChangeEvent<HTMLInputElement>) => void" },
      },
    },
    onFocus: {
      description: "The callback invoked when the checkbox is focused",
      table: {
        type: { summary: "(event: FocusEvent<HTMLInputElement, Element>) => void" },
      },
    },
    size: {
      description: "The size of the Switch",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["sm", "md", "lg"],
      control: "radio",
    },
    spacing: {
      description: "The spacing between the switch and its label text",
      table: {
        type: { summary: "ResponsiveValue<string | number | (string & {})> " },
        defaultValue: { summary: "0.5rem" },
      },
      control: "text",
    },
    tabIndex: {
      description: "The tab-index property of the underlying input element.",
      table: {
        type: { summary: "number" },
      },
      control: "number",
    },
    value: {
      description:
        "The value to be used in the checkbox input. This is the value that will be returned on form submission.",
      table: {
        type: { summary: "string | number" },
      },
      control: "text",
    },
    variant: {
      description: "The variant of the Switch",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
  },
  args: { onBlur: undefined, onChange: undefined, onFocus: undefined },
};

export default meta;
type Story = StoryObj<typeof KvibSwitch>;

export const Preview: Story = {
  render: (args: SwitchProps) => <KvibSwitch {...args}>Toggle</KvibSwitch>,
};
