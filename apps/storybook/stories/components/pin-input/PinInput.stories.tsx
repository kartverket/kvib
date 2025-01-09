import { PinInput as KvibPinInput, PinInputProps } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibPinInput> = {
  title: "Komponenter/Pin Input",
  component: KvibPinInput,
  parameters: {
    docs: {
      story: { inline: true },
    },
    a11y: {
      // This option disables all a11y checks on this story
      disable: true,
    },
  },
  argTypes: {
    mask: {
      description: "If true, the input's value will be masked just like `type=password`",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    otp: {
      description:
        'If true, the pin input component signals to its fields that they should use `autocomplete="one-time-code"`.',
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    type: {
      description: "The type of values the pin-input should allow",
      table: {
        type: { summary: '"number" | "alphanumeric"' },
      },
      options: ["number", "alphanumeric"],
      control: { type: "radio" },
    },
    size: {
      description: "Size of input",
      table: {
        type: { summary: "lg | md | sm | xs" },
        defaultValue: { summary: "md" },
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
    invalid: {
      description: "Toggles if input should be invalid",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    disabled: {
      description: "Toggles if input should be disabled",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibPinInput>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
KvibPinInput.displayName = "PinInput";

export const Preview: Story = {
  render: (args: PinInputProps) => <KvibPinInput {...args} />,
};
