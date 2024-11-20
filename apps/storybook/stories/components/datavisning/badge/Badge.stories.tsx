import { Badge as KvibBadge, Stack as KvibStack } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibBadge> = {
  title: "Komponenter/Badge",
  component: KvibBadge,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
  args: {
    colorPalette: "gray",
    variant: "subtle",
  },
  argTypes: {
    variant: {
      description: "The variant of the badge",
      table: {
        type: { summary: "solid | subtle | outline" },
        defaultValue: { summary: "subtle" },
      },
      options: ["solid", "subtle", "outline"],
      control: "radio",
    },
    colorPalette: {
      description: "The visual color appearance of the badge",
      table: {
        type: { summary: "green | blue | red | gray" },
      },
      defaultValue: { summary: "gray" },
      options: ["green", "blue", "red", "gray"],
      control: "radio",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibBadge>;

export const Preview: Story = {
  args: {
    children: "Badge",
    fontSize: "sm",
  },
  render: args => <KvibBadge {...args} />,
};

export const BadgeTexts: Story = {
  render: () => (
    <>
      <KvibBadge colorPalette="green">Success</KvibBadge>
      <KvibBadge colorPalette="red">Rejected</KvibBadge>
    </>
  ),
};

export const BadgeHensikt: Story = {
  render: () => (
    <>
      <KvibBadge colorPalette="blue">New</KvibBadge>
      <KvibBadge colorPalette="red" variant="solid">
        Not working
      </KvibBadge>
    </>
  ),
};

export const BadgeGreen: Story = {
  render: () => <KvibBadge colorPalette="green">Success</KvibBadge>,
};

export const BadgeRed: Story = {
  render: () => <KvibBadge colorPalette="red">Removed</KvibBadge>,
};

export const BadgeBlue: Story = {
  render: () => <KvibBadge colorPalette="blue">New</KvibBadge>,
};

export const BadgeVariants: Story = {
  args: { colorPalette: "green" },
  render: args => (
    <KvibStack direction="row">
      <KvibBadge {...args} variant="outline">
        Default
      </KvibBadge>
      <KvibBadge {...args} variant="solid">
        Success
      </KvibBadge>
      <KvibBadge {...args} variant="subtle">
        Removed
      </KvibBadge>
    </KvibStack>
  ),
};
