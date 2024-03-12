import { Switch as KvibSwitch, Stack as KvibStack, FormControl, FormLabel, SimpleGrid } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibSwitch> = {
  title: "Skjemaelementer/Switch",
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
        defaultValue: { summary: true },
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
        defaultValue: { summary: false },
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
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    isDisabled: {
      description: "If true, the checkbox will be disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    isFocusable: {
      description: "If true and isDisabled is passed, the checkbox will remain tabbable but not interactive",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    isInvalid: {
      description: "If true, the checkbox is marked as invalid. Changes style of unchecked state.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    isReadOnly: {
      description: "If true, the checkbox will be readonly",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    isRequired: {
      description: "If true, the checkbox input is marked as required, and required attribute will be added",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
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
      control: "function",
    },
    onChange: {
      description: "The callback invoked when the checked state of the Checkbox changes.",
      table: {
        type: { summary: "(event: ChangeEvent<HTMLInputElement>) => void" },
      },
      control: "function",
    },
    onFocus: {
      description: "The callback invoked when the checkbox is focused",
      table: {
        type: { summary: "(event: FocusEvent<HTMLInputElement, Element>) => void" },
      },
      control: "function",
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

export const Switch: Story = {
  args: {},
  render: (args) => (
    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="email-alerts" mb="0">
        Skru på varsler via mail?
      </FormLabel>
      <KvibSwitch {...args} id="email-alerts" />
    </FormControl>
  ),
};

export const SwitchSizes: Story = {
  args: {},
  render: (args) => (
    <KvibStack align="center" direction="row">
      <KvibSwitch {...args} aria-label="Switch small" size="sm" />
      <KvibSwitch {...args} aria-label="Switch medium" size="md" />
      <KvibSwitch {...args} aria-label="Switch large" size="lg" />
    </KvibStack>
  ),
};

export const SwitchColors: Story = {
  args: { isChecked: true },
  render: (args) => (
    <KvibStack direction="row">
      <KvibSwitch {...args} aria-label="Switch green" colorScheme="green" />
      <KvibSwitch {...args} aria-label="Switch blue" colorScheme="blue" />
      <KvibSwitch {...args} aria-label="Switch red" colorScheme="red" />
      <KvibSwitch {...args} aria-label="Switch gray" colorScheme="gray" />
    </KvibStack>
  ),
};

export const SwitchStates: Story = {
  args: {},
  render: (args) => (
    <FormControl as={SimpleGrid} columns={{ base: 2, lg: 4 }}>
      <FormLabel id="isCheckedLabel" htmlFor="isChecked">
        isChecked:
      </FormLabel>
      <KvibSwitch {...args} id="isChecked" isChecked />

      <FormLabel id="isDisabledLabel" htmlFor="isDisabled">
        isDisabled:
      </FormLabel>
      <KvibSwitch {...args} id="isDisabled" isDisabled defaultChecked />

      <FormLabel id="isFocusableLabel" htmlFor="isFocusable">
        isFocusable:
      </FormLabel>
      <KvibSwitch {...args} id="isFocusable" isFocusable isDisabled />

      <FormLabel id="isInvalidLabel" htmlFor="isInvalid">
        isInvalid:
      </FormLabel>
      <KvibSwitch {...args} id="isInvalid" isInvalid />

      <FormLabel id="isReadOnlyLabel" htmlFor="isReadOnly">
        isReadOnly:
      </FormLabel>
      <KvibSwitch {...args} id="isReadOnly" isReadOnly />

      <FormLabel id="isRequiredLabel" htmlFor="isRequired">
        isRequired:
      </FormLabel>
      <KvibSwitch {...args} id="isRequired" isRequired />
    </FormControl>
  ),
};
