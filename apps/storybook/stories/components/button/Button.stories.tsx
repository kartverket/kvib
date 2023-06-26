import { Button as KvibButton, HStack } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibButton> = {
  title: "Komponenter/Button**",
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
    isLoading: {
      description: "If true, the button will show a spinner.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibButton>;

export const Button: Story = {
  args: { children: "Klikk her" },
  render: (args) => <KvibButton {...args}>{args.children}</KvibButton>,
};

export const ButtonVariants: Story = {
  args: { children: "Klikk her" },
  render: (args) => (
    <HStack>
      <KvibButton {...args} variant="solid">
        {args.children}
      </KvibButton>
      <KvibButton {...args} variant="outline">
        {args.children}
      </KvibButton>
      <KvibButton {...args} variant="link">
        {args.children}
      </KvibButton>
    </HStack>
  ),
};

export const ButtonStates: Story = {
  args: { children: "Klikk her" },
  render: (args) => (
    <HStack>
      <KvibButton {...args} isLoading>
        {args.children}
      </KvibButton>
      <KvibButton {...args} isDisabled>
        {args.children}
      </KvibButton>
    </HStack>
  ),
};

export const ButtonWithIcon: Story = {
  args: { children: "Klikk her" },
  render: (args) => (
    <HStack>
      <KvibButton {...args} leftIcon="add">
        {args.children}
      </KvibButton>
      <KvibButton {...args} rightIcon="add">
        {args.children}
      </KvibButton>
    </HStack>
  ),
};

export const ButtonSizes: Story = {
  args: { children: "Klikk her" },
  render: (args) => (
    <HStack>
      <KvibButton {...args} size="xs">
        {args.children}
      </KvibButton>
      <KvibButton {...args} size="sm">
        {args.children}
      </KvibButton>
      <KvibButton {...args} size="md">
        {args.children}
      </KvibButton>
      <KvibButton {...args} size="lg">
        {args.children}
      </KvibButton>
    </HStack>
  ),
};
