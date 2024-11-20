import { NumberInputProps } from "@kvib/react";
import { NumberInput as KvibNumberInput, NumberInputField } from "@kvib/react/src";

import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibNumberInput> = {
  title: "Komponenter/Number Input",
  component: KvibNumberInput,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
    a11y: {
      // This option disables all a11y checks on this story
      disable: true,
    },
  },
  argTypes: {
    max: {
      description: "Maximum value of the counter",
      table: {
        type: { summary: "number" },
      },
      control: "text",
    },
    min: {
      description: "Minimum value of the counter",
      table: {
        type: { summary: "number" },
      },
      control: "text",
    },
    clampValueOnBlur: {
      description:
        "This controls the value update when you blur out of the input. - If true and the value is greater than max, the value will be reset to max - Else, the value remains the same.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    precision: {
      description: "The number of decimal points used to round the value.",
      table: {
        type: { summary: "number" },
      },
      control: "text",
    },
    keepWithinRange: {
      description: "Toggles if value should be kept within the range of max and min.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    step: {
      description: "The step used to increment of decrement the value.",
      table: {
        type: { summary: "number" },
      },
      control: "text",
    },
    size: {
      description: "Size of input",
      table: {
        type: { summary: "lg | md | sm | xs" },
      },
      options: ["lg", "md", "sm", "xs"],
      control: { type: "radio" },
    },
    variant: {
      description: "Variant",
      table: {
        type: { summary: "outline | filled | flushed | unstyled" },
        defaultValue: { summary: "outline" },
      },
      options: ["outline", "filled", "flushed", "unstyled"],
      control: { type: "radio" },
    },
    allowMouseWheel: {
      description: "If true, the input's value will change based on mouse wheel scrolling",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    required: {
      description: "Toggles if input should be required",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    readOnly: {
      description: "Toggles if input should be read-only",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    invalid: {
      description: "Toggles if input should be invalid",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    disabled: {
      description: "Toggles if input should be disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
  },
};

export default meta;
type NumberInputStory = StoryObj<typeof KvibNumberInput>;

export const Preview: NumberInputStory = {
  args: {
    variant: "outline",
    defaultValue: 3507,
  },
  render: (args: NumberInputProps) => (
    <KvibNumberInput {...args}>
      <NumberInputField />
    </KvibNumberInput>
  ),
};
