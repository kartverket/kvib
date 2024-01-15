import {
  CircularProgress as KvibCircularProgress,
  HStack as KvibHStack,
  CircularProgressLabel as KvibCircularProgressLabel,
} from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibCircularProgress> = {
  title: "Tilbakemelding/Circular Progress",
  component: KvibCircularProgress,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    capIsRound: {
      description: "If true, the cap of the progress indicator will be rounded.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    color: {
      description: "A function that returns the desired valueText to use in place of the value",
      table: {
        type: { summary: "(value: number, percent: number) => string" },
      },
      control: "text",
    },
    getValueText: {
      description: "The color of the progress indicator. Use a color key in the theme object",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    isIndeterminate: {
      description: "If true, the cap of the progress indicator will be rounded.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    max: {
      description: "Maximum value defining 100% progress made (must be higher than 'min')",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 100 },
      },
      control: "number",
    },
    min: {
      description: "Minimum value defining 'no progress' (must be lower than 'max')",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 0 },
      },
      control: "number",
    },
    size: {
      description: "The size of the circular progress in CSS units",
      table: {
        type: { summary: "string | number" },
      },
      control: "text",
    },
    thickness: {
      description: "This defines the stroke width of the svg circle.",
      table: {
        type: { summary: "string | number" },
        defaultValue: { summary: "10px" },
      },
      control: "text",
    },
    trackColor: {
      description: "The color name of the progress track. Use a color key in the theme object",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    value: {
      description: "Current progress (must be between min/max)",
      table: {
        type: { summary: "number" },
      },
      control: "number",
    },
    valueText: {
      description: "The desired valueText to use in place of the value",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibCircularProgress>;

export const CircularProgress: Story = {
  args: { value: 80 },
  render: (args) => <KvibCircularProgress {...args} aria-label="progress bar" />,
};

export const CircularProgressSizes: Story = {
  args: { value: 30 },
  render: (args) => (
    <KvibHStack>
      <KvibCircularProgress {...args} size="80px" aria-label="progress bar 80px" />
      <KvibCircularProgress {...args} size="120px" aria-label="progress bar 120px" />
    </KvibHStack>
  ),
};

export const CircularProgressThickness: Story = {
  args: { value: 70 },
  render: (args) => (
    <KvibHStack>
      <KvibCircularProgress {...args} thickness="4px" aria-label="progress bar thin" />
      <KvibCircularProgress {...args} thickness="10px" aria-label="progress bar thick" />
    </KvibHStack>
  ),
};

export const CircularProgressColors: Story = {
  args: { value: 70 },
  render: (args) => (
    <KvibHStack>
      <KvibCircularProgress {...args} color="green.400" aria-label="progress bar green" />
      <KvibCircularProgress {...args} color="blue.400" aria-label="progress bar blue" />
    </KvibHStack>
  ),
};

export const CircularProgressLabel: Story = {
  args: { color: "green.400" },
  render: (args) => (
    <KvibHStack>
      <KvibCircularProgress {...args} value={70} aria-label="progress bar labeled 70%">
        <KvibCircularProgressLabel>70%</KvibCircularProgressLabel>
      </KvibCircularProgress>
      <KvibCircularProgress {...args} value={30} aria-label="progress bar labeled 30%">
        <KvibCircularProgressLabel>30%</KvibCircularProgressLabel>
      </KvibCircularProgress>
    </KvibHStack>
  ),
};

export const CircularProgressIndeterminate: Story = {
  args: {},
  render: (args) => <KvibCircularProgress {...args} isIndeterminate aria-label="progress bar indeterminate" />,
};
