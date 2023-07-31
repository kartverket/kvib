import { PinInput as KvibPinInput } from "@kvib/react/src/pin-input/Pin-Input";
import { PinInputField as KvibPinInputField } from "@kvib/react/src/pin-input/Pin-Input-Field";
import { HStack } from "@chakra-ui/layout";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibPinInput> = {
  title: "Komponenter/Input**/Pin Input**",
  component: KvibPinInput,
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
    manageFocus: {
      description: "If true, focus will move automatically to the next input once filled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
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
    isInvalid: {
      description: "Toggles if input should be invalid",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    isDisabled: {
      description: "Toggles if input should be disabled",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
  },
};

export default meta;
type PinInputStory = StoryObj<typeof KvibPinInput>;

export const PinInput: PinInputStory = {
  args: {
    size: "md",
    variant: "outline",
    isDisabled: false,
    isInvalid: false,
  },
  render: (args) => (
    <HStack>
      <KvibPinInput {...args}>
        <KvibPinInputField />
        <KvibPinInputField />
        <KvibPinInputField />
        <KvibPinInputField />
      </KvibPinInput>
    </HStack>
  ),
};
