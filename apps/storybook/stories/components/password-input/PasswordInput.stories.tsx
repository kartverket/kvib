import { PasswordInput, PasswordInputProps } from "@kvib/react";

import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PasswordInput> = {
  title: "Komponenter/Password Input",
  component: PasswordInput,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
    a11y: {
      // This option disables all a11y checks on this story
      disable: true,
    },
  },
  argTypes: {
    defaultVisible: {
      description: "The default visibility state of the password input.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    visible: {
      description: "The controlled visibility state of the password input.",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    onVisibleChange: {
      description: "Callback invoked when the visibility state changes.",
      table: {
        type: { summary: "(visible: boolean) => void" },
      },
    },
    visibilityIcon: {
      description: "Custom icons for the visibility toggle button.",
      table: {
        type: { summary: "{ on: React.ReactNode; off: React.ReactNode }" },
      },
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

const PasswordInputExample = (args: PasswordInputProps) => <PasswordInput {...args} />;

export const Preview: Story = {
  render: args => <PasswordInputExample {...args} />,
};
