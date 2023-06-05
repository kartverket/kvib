import { Input as KvibInput } from "@kvib/react/src/input/Input";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibInput> = {
  title: "Komponenter/Input",
  component: KvibInput,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
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
      },
      control: "boolean",
    },
    isReadonly: {
      description: "Toggles if input should be read-only",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
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
type Story = StoryObj<typeof KvibInput>;

export const Input: Story = {
  args: { size: "md", variant: "outline", isRequired: false, isReadonly: false, isInvalid: false, isDisabled: false },
  render: (args) => <KvibInput {...args} />,
};
