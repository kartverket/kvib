import {
  HStack,
  Progress as KvibProgress,
  ProgressBar,
  ProgressProps,
  ProgressRoot,
  ProgressValueText,
} from "@kvib/react";
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
    colorPalette: {
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
    striped: {
      description: "If true, the progress bar will show stripe",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    animated: {
      description: "If true, and hasStripe is true, the stripes will be animated",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    max: {
      description: "The maximum value of the progress",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "100" },
      },
      control: "number",
    },

    min: {
      description: "The minimum value of the progress",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
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
        defaultValue: { summary: "0" },
      },
      control: "number",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibProgress>;

export const Preview: Story = {
  args: { value: 40, width: "12rem" },
  render: (args: ProgressProps) => (
    <ProgressRoot defaultValue={40} {...args}>
      <HStack gap="5">
        <ProgressBar flex="1" />
        <ProgressValueText>40%</ProgressValueText>
      </HStack>
    </ProgressRoot>
  ),
};
