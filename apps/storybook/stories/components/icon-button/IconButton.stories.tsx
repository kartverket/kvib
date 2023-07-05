import { IconButton as KvibIconButton, HStack } from "@kvib/react";

import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibIconButton> = {
  title: "Komponenter/Icon Button**",
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
        type: { summary: " xs| sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["xs", "sm", "md", "lg"],
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
  },
};

export default meta;
type Story = StoryObj<typeof KvibIconButton>;

export const IconButton: Story = {
  args: { icon: "add", "aria-label": "IconButton default" },
  render: (args) => <KvibIconButton {...args}></KvibIconButton>,
};

export const IconButtonSizes: Story = {
  args: { icon: "add" },
  render: (args) => (
    <HStack>
      <KvibIconButton {...args} aria-label="IconButton xs" size="xs"></KvibIconButton>
      <KvibIconButton {...args} aria-label="IconButton sm" size="sm"></KvibIconButton>
      <KvibIconButton {...args} aria-label="IconButton md" size="md"></KvibIconButton>
      <KvibIconButton {...args} aria-label="IconButton lg" size="lg"></KvibIconButton>
    </HStack>
  ),
};

export const IconButtonVariants: Story = {
  args: { icon: "add" },
  render: (args) => (
    <HStack>
      <KvibIconButton {...args} aria-label="IconButton solid" variant="solid"></KvibIconButton>
      <KvibIconButton {...args} aria-label="IconButton outline" variant="outline"></KvibIconButton>
      <KvibIconButton {...args} aria-label="IconButton link" variant="link"></KvibIconButton>
      <KvibIconButton {...args} aria-label="IconButton ghost" variant="ghost"></KvibIconButton>
    </HStack>
  ),
};

export const IconButtonStates: Story = {
  args: { icon: "add" },
  render: (args) => (
    <HStack>
      <KvibIconButton {...args} aria-label="IconButton disabled" isDisabled></KvibIconButton>
      <KvibIconButton {...args} aria-label="IconButton loading" isLoading></KvibIconButton>
    </HStack>
  ),
};
