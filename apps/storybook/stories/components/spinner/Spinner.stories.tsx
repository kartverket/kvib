import { Spinner as KvibSpinner, Stack as KvibStack } from "@kvib/react/src";
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
    color: {
      description: "The color of the spinner",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    emptyColor: {
      description: "The color of the empty area in the spinner",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "transparent" },
      },
      control: "text",
    },
    label: {
      description:
        "For accessibility, it is important to add a fallback loading text. This text will be visible to screen readers.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Loading..." },
      },
      control: "text",
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
    speed: {
      description: "The speed of the spinner",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "0.45s" },
      },
      control: "text",
    },
    thickness: {
      description: "The thickness of the spinner",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "2px" },
      },
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibSpinner>;

export const Spinner: Story = {
  args: {},
  render: (args) => <KvibSpinner {...args} />,
};

export const SpinnerColors: Story = {
  args: {},
  render: (args) => (
    <KvibStack>
      <KvibSpinner {...args} color="blue" />
      <KvibSpinner {...args} color="green" />
      <KvibSpinner {...args} color="red" />
      <KvibSpinner {...args} color="gray" />
    </KvibStack>
  ),
};

export const SpinnerSizes: Story = {
  args: {},
  render: (args) => (
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
  args: { size: "xl", emptyColor: "gray.200", speed: "0.65s", color: "green.500", thickness: "4px" },
  render: (args) => <KvibSpinner {...args} />,
};
