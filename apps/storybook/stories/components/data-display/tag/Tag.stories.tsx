import {
  Tag as KvibTag,
  HStack as KvibHStack,
  TagLabel as KvibTagLabel,
  TagCloseButton as KvibTagCloseButton,
} from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibTag> = {
  title: "Komponenter/Data Display/Tag",
  component: KvibTag,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    variant: {
      description: "The variant of the Tag",
      table: {
        type: { summary: "subtle | solid | outline" },
        defaultValue: { summary: "subtle" },
      },
      options: ["subtle", "solid", "outline"],
      control: "radio",
    },
    colorScheme: {
      description: "The visual color appearance of the Tag",
      table: {
        type: { summary: "green | blue | red | gray" },
        defaultValue: { summary: "gray" },
      },
      options: ["green", "blue", "red", "gray"],
      control: "radio",
    },
    size: {
      description: "The size of the Tag",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibTag>;

export const Tag: Story = {
  args: {},
  render: (args) => <KvibTag {...args}>Eksempeltag</KvibTag>,
};

export const TagColors: Story = {
  args: {},
  render: (args) => (
    <KvibHStack spacing={4}>
      {["green", "blue", "red", "gray"].map((colorScheme) => (
        <KvibTag {...args} key={colorScheme} colorScheme={colorScheme}>
          {colorScheme}
        </KvibTag>
      ))}
    </KvibHStack>
  ),
};

export const TagSizes: Story = {
  args: { variant: "solid", colorScheme: "green" },
  render: (args) => (
    <KvibHStack spacing={4}>
      {["sm", "md", "lg"].map((size) => (
        <KvibTag {...args} size={size} key={size}>
          {size}
        </KvibTag>
      ))}
    </KvibHStack>
  ),
};

export const TagVariants: Story = {
  args: { colorScheme: "blue" },
  render: (args) => (
    <KvibHStack spacing={4}>
      {["subtle", "solid", "outline"].map((variant) => (
        <KvibTag {...args} variant={variant} key={variant}>
          {variant}
        </KvibTag>
      ))}
    </KvibHStack>
  ),
};

export const TagClose: Story = {
  args: { colorScheme: "green", variant: "solid", size: "lg" },
  render: (args) => (
    <KvibTag {...args}>
      <KvibTagLabel>Green</KvibTagLabel>
      <KvibTagCloseButton />
    </KvibTag>
  ),
};
