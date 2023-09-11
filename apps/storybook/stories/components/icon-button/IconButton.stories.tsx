import {
  IconButton as KvibIconButton,
  HStack,
  VStack,
  ButtonGroup as KvibButtonGroup,
  StackDivider,
  Button as KvibButton,
} from "@kvib/react/src";

import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibIconButton> = {
  title: "Komponenter/Icon Button",
  component: KvibIconButton,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    size: {
      description: "Size of Icon button",
      table: {
        type: { summary: "xs | sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["xs", "sm", "md", "lg"],
      control: { type: "radio" },
    },
    variant: {
      description: "The variant of the IconButton.",
      table: {
        type: { summary: "primary | secondary | tertiary | ghost" },
        defaultValue: { summary: "primary" },
      },
      options: ["primary", "secondary", "tertiary", "ghost"],
      control: { type: "radio" },
    },
    isDisabled: {
      description: "If true, the button will be disabled.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    colorScheme: {
      table: {
        defaultValue: { summary: "green" },
      },
    },
    iconFill: {
      table: {
        type: { summary: "boolean" },
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
  },
};

export default meta;
type Story = StoryObj<typeof KvibIconButton>;

export const IconButton: Story = {
  args: { icon: "favorite", "aria-label": "IconButton default" },
  render: (args) => <KvibIconButton {...args} />,
};

export const IconButtonSizes: Story = {
  args: { icon: "add" },
  render: (args) => (
    <HStack>
      <KvibIconButton {...args} aria-label="IconButton xs" size="xs" />
      <KvibIconButton {...args} aria-label="IconButton sm" size="sm" />
      <KvibIconButton {...args} aria-label="IconButton md" size="md" />
      <KvibIconButton {...args} aria-label="IconButton lg" size="lg" />
    </HStack>
  ),
};

export const IconButtonVariants: Story = {
  args: { icon: "add" },
  render: (args) => (
    <HStack>
      <KvibIconButton {...args} aria-label="IconButton solid" variant="primary" />
      <KvibIconButton {...args} aria-label="IconButton outline" variant="secondary" />
      <KvibIconButton {...args} aria-label="IconButton link" variant="tertiary" />
      <KvibIconButton {...args} aria-label="IconButton ghost" variant="ghost" />
    </HStack>
  ),
};

export const IconButtonStates: Story = {
  args: { icon: "add" },
  render: (args) => (
    <HStack>
      <KvibIconButton {...args} aria-label="IconButton disabled" isDisabled />
      <KvibIconButton {...args} aria-label="IconButton loading" isLoading />
    </HStack>
  ),
};

export const IconButtonGroup: Story = {
  args: { icon: "favorite", "aria-label": "IconButton default" },
  render: (args) => (
    <VStack divider={<StackDivider borderColor="gray.200" />}>
      <KvibButtonGroup orientation="vertical" size="sm">
        <KvibIconButton {...args} />
        <KvibIconButton {...args} />
      </KvibButtonGroup>
      <KvibButtonGroup colorScheme="blue" isAttached variant={"secondary"} size={"sm"}>
        <KvibButton>Lagre</KvibButton>
        <KvibIconButton icon={"add"} aria-label={"IconButton add"} />
      </KvibButtonGroup>
    </VStack>
  ),
};
