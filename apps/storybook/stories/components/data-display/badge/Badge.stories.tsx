import { Badge as KvibBadge, Stack as KvibStack } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibBadge> = {
  title: "Komponenter/Data Display/Badge",
  component: KvibBadge,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
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
    colorScheme: {
      description: "The variant of the badge",
      table: {
        type: { summary: "green | blue | red | gray" },
        defultValue: { summary: "gray" },
      },
      options: ["green", "blue", "red", "gray"],
      control: "radio",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibBadge>;

export const Badge: Story = {
  args: { children: "Badge" },
  render: (args) => <KvibBadge {...args} />,
};

export const BadgeColors: Story = {
  args: {},
  render: (args) => (
    <KvibStack direction="row">
      <KvibBadge>Default</KvibBadge>
      <KvibBadge {...args} colorScheme="green">
        Success
      </KvibBadge>
      <KvibBadge {...args} colorScheme="red">
        Removed
      </KvibBadge>
      <KvibBadge {...args} colorScheme="blue">
        New
      </KvibBadge>
    </KvibStack>
  ),
};

export const BadgeVariants: Story = {
  args: { colorScheme: "green" },
  render: (args) => (
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
