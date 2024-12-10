import { Spinner as KvibSpinner, Stack as KvibStack } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibSpinner> = {
  title: "Komponenter/Spinner",
  component: KvibSpinner,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
  argTypes: {
    colorPalette: {
      description: "The colorpalette of the component",
      table: {
        type: { summary: "green | blue | gray" },
      },
      control: { type: "radio" },
      options: ["green", "blue", "gray"],
    },
    size: {
      description: "The size of the Spinner",
      table: {
        type: { summary: "xs | sm | md | lg | xl" },
        defaultValue: { summary: "md" },
      },
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibSpinner>;

export const Preview: Story = {
  render: args => <KvibSpinner {...args} />,
};

export const SpinnerColors: Story = {
  render: args => (
    <KvibStack>
      <KvibSpinner {...args} color="blue" />
      <KvibSpinner {...args} color="green" />
      <KvibSpinner {...args} color="red" />
      <KvibSpinner {...args} color="gray" />
    </KvibStack>
  ),
};

export const SpinnerSizes: Story = {
  render: args => (
    <KvibStack>
      <KvibSpinner {...args} size="xl" />
      <KvibSpinner {...args} size="lg" />
      <KvibSpinner {...args} size="md" />
      <KvibSpinner {...args} size="sm" />
      <KvibSpinner {...args} size="xs" />
    </KvibStack>
  ),
};

export const SpinnerArea: Story = {
  args: { size: "xl", color: "green.500" },
  render: args => <KvibSpinner {...args} />,
};
