import { NumberInput as KvibNumberInput } from "@kvib/react/src/number-input/Number-Input";
import { NumberInputField as KvibNumberInputField } from "@kvib/react/src/number-input/Number-Input-Field";
import { NumberInputStepper as KvibNumberInputStepper } from "@kvib/react/src/number-input/Number-Input-Stepper";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibNumberInput> = {
  title: "Komponenter/Input**/Number Input**",
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
    size: {
      description: "Size of input",
      table: {
        type: { summary: "lg | md | sm | xs" },
        defaultValue: { summary: "md" },
      },
      options: ["lg", "md", "sm", "xs"],
      control: { type: "select" },
    },
    variant: {
      description: "Variant",
      table: {
        type: { summary: "outline | filled | flushed | unstyled" },
        defaultValue: { summary: "outline" },
      },
      options: ["outline", "filled", "flushed", "unstyled"],
      control: { type: "select" },
    },
    isRequired: {
      description: "Toggles if input should be required",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    isReadOnly: {
      description: "Toggles if input should be read-only",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    isInvalid: {
      description: "Toggles if input should be invalid",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    isDisabled: {
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

export const NumberInput: NumberInputStory = {
  args: {
    size: "md",
    variant: "outline",
    isDisabled: false,
    isInvalid: false,
    isReadOnly: false,
    isRequired: false,
  },
  render: (args) => (
    <KvibNumberInput {...args}>
      <KvibNumberInputField />
      <KvibNumberInputStepper />
    </KvibNumberInput>
  ),
};
