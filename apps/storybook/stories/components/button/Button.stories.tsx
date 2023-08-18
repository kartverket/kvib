import { Button as KvibButton, VStack, StackDivider, ButtonGroup as KvibButtonGroup } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibButton> = {
  title: "Komponenter/Button",
  component: KvibButton,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    size: {
      description: "Size of the Button",
      table: {
        type: { summary: " xs| sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["xs", "sm", "md", "lg"],
      control: { type: "radio" },
    },
    variant: {
      description: "The variant of the Button.",
      table: {
        type: { summary: "solid | outline | link | ghost" },
        defaultValue: { summary: "solid" },
      },
      options: ["solid", "outline", "link", "ghost"],
      control: { type: "radio" },
    },
    isDisabled: {
      description: "If true, the button will be disabled.",
      table: {
        type: { summary: Boolean },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    isLoading: {
      description: "If true, the button will show a spinner.",
      table: {
        type: { summary: "boolean" },
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
    iconFill: {
      table: {
        type: { summary: "boolean" },
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
    <KvibButtonGroup>
      <KvibButton {...args} variant="solid">
        {args.children}
      </KvibButton>
      <KvibButton {...args} variant="outline">
        {args.children}
      </KvibButton>
      <KvibButton {...args} variant="link">
        {args.children}
      </KvibButton>
      <KvibButton {...args} variant="ghost">
        {args.children}
      </KvibButton>
    </KvibButtonGroup>
  ),
};

export const ButtonStates: Story = {
  args: { children: "Klikk her" },
  render: (args) => (
    <KvibButtonGroup>
      <KvibButton {...args} isLoading>
        {args.children}
      </KvibButton>
      <KvibButton {...args} isDisabled>
        {args.children}
      </KvibButton>
    </KvibButtonGroup>
  ),
};

export const ButtonWithIcon: Story = {
  args: { children: "Klikk her" },
  render: (args) => (
    <KvibButtonGroup>
      <KvibButton {...args} leftIcon="favorite">
        {args.children}
      </KvibButton>
      <KvibButton {...args} rightIcon="favorite">
        {args.children}
      </KvibButton>
      <KvibButton {...args} iconFill rightIcon="favorite">
        {args.children}
      </KvibButton>
    </KvibButtonGroup>
  ),
};

export const ButtonSizes: Story = {
  args: { children: "Klikk her" },
  render: (args) => (
    <KvibButtonGroup>
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
    </KvibButtonGroup>
  ),
};

export const ButtonGroup: Story = {
  args: { children: "Klikk her" },
  render: (args) => (
    <VStack divider={<StackDivider borderColor="gray.200" />}>
      <KvibButtonGroup orientation="vertical" variant="outline" spacing="4" size="sm">
        <KvibButton {...args}>{args.children}</KvibButton>
        <KvibButton {...args}>{args.children}</KvibButton>
      </KvibButtonGroup>
      <KvibButtonGroup colorScheme="blue" isAttached>
        <KvibButton {...args}>{args.children}</KvibButton>
        <KvibButton rightIcon="add" {...args}>
          {args.children}
        </KvibButton>
      </KvibButtonGroup>
    </VStack>
  ),
};
