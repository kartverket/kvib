import { Button as KvibButton } from "@kvib/react/src/button";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibButton> = {
  title: "Komponenter/**Button",
  component: KvibButton,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    isDisabled: {
      description: "If true, the button will be disabled.",
      table: {
        type: { summary: Boolean },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    leftIcon: {
      description: "If added, the button will show an icon before the button's label.",
      table: {
        type: { summary: String },
      },
      control: "text",
    },
    rightIcon: {
      description: "If added, the button will show an icon after the button's label.",
      table: {
        type: { summary: String },
      },
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibButton>;

export const SolidButton: Story = {
  args: { children: "Klikk her", colorScheme: "green", size: "md", variant: "solid", isDisabled: false },
  render: (args) => <KvibButton {...args}>{args.children}</KvibButton>,
};

export const OutlineButton: Story = {
  args: { children: "Klikk her", colorScheme: "green", size: "md", variant: "outline", isDisabled: false },
  render: (args) => <KvibButton {...args}>{args.children}</KvibButton>,
};
export const LinkButton: Story = {
  args: { children: "Klikk her", colorScheme: "green", size: "md", variant: "link", isDisabled: false },
  render: (args) => <KvibButton {...args}>{args.children}</KvibButton>,
};

export const DisabledButton: Story = {
  args: { children: "Klikk her", colorScheme: "green", size: "md", variant: "solid", isDisabled: true },
  render: (args) => <KvibButton {...args}>{args.children}</KvibButton>,
};

export const LeftIconButton: Story = {
  args: { children: "Klikk her", leftIcon: "add" },
  render: (args) => <KvibButton {...args}>{args.children}</KvibButton>,
};

export const RightIconButton: Story = {
  args: { children: "Klikk her", rightIcon: "add" },
  render: (args) => <KvibButton {...args}>{args.children}</KvibButton>,
};
