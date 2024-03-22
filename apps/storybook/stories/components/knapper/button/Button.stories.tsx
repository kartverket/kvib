import { Button as KvibButton, ButtonGroup as KvibButtonGroup, StackDivider, VStack } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibButton> = {
  title: "Knapper/Button",
  component: KvibButton,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
  argTypes: {
    size: {
      description: "Size of the Button",
      table: {
        type: { summary: "xs | sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["xs", "sm", "md", "lg"],
      control: { type: "radio" },
    },
    variant: {
      description: "The variant of the Button.",
      table: {
        type: { summary: "primary | secondary | tertiary | ghost" },
        defaultValue: { summary: "primary" },
      },
      options: ["primary", "secondary", "tertiary", "ghost"],
      control: { type: "radio" },
    },
    colorScheme: {
      description: "The visual color appearance of the component.",
      table: {
        type: { summary: "green | blue | gray | red" },
        defaultValue: { summary: "green" },
      },
      options: ["green", "blue", "gray", "red"],
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
    iconFill: {
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    iconAriaIsHidden: {
      table: { type: { summary: "boolean" } },
      control: "boolean",
      defaultValue: { summary: false },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibButton>;

export const Button: Story = {
  args: { children: "Klikk her" },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
  render: (args) => <KvibButton {...args}>{args.children}</KvibButton>,
};

export const ButtonColors: Story = {
  args: {},
  render: (args) => (
    <KvibButtonGroup orientation="vertical">
      <KvibButton {...args}>Nettside</KvibButton>
      <KvibButton colorScheme="blue" {...args}>
        Forvaltning
      </KvibButton>
    </KvibButtonGroup>
  ),
};

export const ButtonVariants: Story = {
  args: { children: "Klikk her" },
  render: (args) => (
    <KvibButtonGroup
      justifyContent="space-between"
      height={["fit-content", "fit-content", "28rem"]}
      orientation="vertical"
      gap="1rem"
    >
      <KvibButton {...args} variant="primary">
        {args.children}
      </KvibButton>
      <KvibButton {...args} variant="secondary">
        {args.children}
      </KvibButton>
      <KvibButton {...args} variant="tertiary">
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

export const ButtonIcons: Story = {
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
      <KvibButtonGroup orientation="vertical" variant="secondary" spacing="4" size="sm">
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
