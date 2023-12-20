import { Progress as KvibProgress, Stack as KvibStack } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibProgress> = {
  title: "Komponenter/Progress",
  component: KvibProgress,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
  argTypes: {
    colorScheme: {
      description: "The visual color appearance of the component",
      table: {
        type: {
          summary: '"gray" | "red" | "green" | "blue" | "yellow"',
        },
        defaultValue: { summary: "blue" },
      },
      options: ["gray", "red", "yellow", "green", "blue"],
      control: {
        type: "radio",
      },
    },

    hasStripe: {
      description: "If true, the progress bar will show stripe",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },

    isAnimated: {
      description: "If true, and hasStripe is true, the stripes will be animated",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },

    isIndeterminate: {
      description: "If true, the progress will be indeterminate and the value prop will be ignored",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },

    max: {
      description: "The maximum value of the progress",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 100 },
      },
      control: "number",
    },

    min: {
      description: "The minimum value of the progress",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 0 },
      },
      control: "number",
    },

    size: {
      description: "The size of the Progress",
      table: {
        type: { summary: '"xs" | "sm" | "md" | "lg"' },
        defaultValue: { summary: "md" },
      },
      options: ["xs", "sm", "md", "lg"],
      control: {
        type: "radio",
      },
    },

    value: {
      description: "The value of the progress indicator. If undefined the progress bar will be in indeterminate state",
      table: {
        type: { summary: "number" },
      },
      control: "number",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibProgress>;

export const Progress: Story = {
  args: { value: 80 },
  render: (args) => <KvibProgress {...args} aria-label="progress bar" />,
};

export const ProgressStripe: Story = {
  args: { value: 60, hasStripe: true },
  render: (args) => <KvibProgress {...args} aria-label="progress bar striped" />,
};

export const ProgressStripeAnimated: Story = {
  args: { value: 60, hasStripe: true, isAnimated: true },
  render: (args) => <KvibProgress {...args} aria-label="progress bar striped animated" />,
};

export const ProgressSizes: Story = {
  args: { value: 20, colorScheme: "green" },
  render: (args) => (
    <KvibStack spacing={5}>
      <KvibProgress {...args} size="sm" aria-label="progress bar small" />
      <KvibProgress {...args} size="md" aria-label="progress bar medium" />
      <KvibProgress {...args} size="lg" aria-label="progress bar large" />
      <KvibProgress {...args} height="32px" aria-label="progress bar 32px" />
    </KvibStack>
  ),
};

export const ProgressColors: Story = {
  args: { value: 40, size: "md" },
  render: (args) => (
    <KvibStack spacing={5}>
      <KvibProgress {...args} colorScheme="green" aria-label="progress bar green" />
      <KvibProgress {...args} colorScheme="blue" aria-label="progress bar blue" />
      <KvibProgress {...args} colorScheme="red" aria-label="progress bar red" />
      <KvibProgress {...args} colorScheme="gray" aria-label="progress bar gray" />
      <KvibProgress {...args} colorScheme="yellow" aria-label="progress bar yellow" />
    </KvibStack>
  ),
};

export const ProgressLook: Story = {
  args: { value: 40, size: "md" },
  render: (args) => (
    <KvibStack spacing={5}>
      <KvibProgress {...args} colorScheme="blue" aria-label="progress bar blue" />
      <KvibProgress {...args} colorScheme="red" aria-label="progress bar red" />
      <KvibProgress {...args} colorScheme="gray" aria-label="progress bar gray" />
      <KvibProgress {...args} colorScheme="yellow" aria-label="progress bar yellow" />
      <KvibProgress {...args} size="sm" aria-label="progress bar small" />
      <KvibProgress {...args} size="md" aria-label="progress bar medium" />
      <KvibProgress {...args} size="lg" aria-label="progress bar large" />
      <KvibProgress {...args} height="32px" aria-label="progress bar 32px" />
    </KvibStack>
  ),
};

export const ProgressVariation: Story = {
  args: { size: "md" },
  render: (args) => (
    <KvibStack>
      <KvibProgress {...args} isIndeterminate aria-label="progress bar indeterminate" />,
      <KvibProgress {...args} hasStripe isAnimated aria-label="progress bar animated stripe" value={40} />,
    </KvibStack>
  ),
};
