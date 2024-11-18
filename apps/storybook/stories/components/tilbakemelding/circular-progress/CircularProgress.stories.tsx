import { ProgressCircle, ProgressCircleRing, ProgressCircleValueText } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProgressCircle> = {
  title: "Komponenter/Circular Progress",
  component: ProgressCircle,
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
        defaultValue: { summary: "false" },
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
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    max: {
      description: "Maximum value defining 100% progress made (must be higher than 'min')",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "100" },
      },
      control: "number",
    },
    min: {
      description: "Minimum value defining 'no progress' (must be lower than 'max')",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
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
type Story = StoryObj<typeof ProgressCircle>;

export const Preview: Story = {
  render: args => (
    <ProgressCircle>
      <ProgressCircleRing />
      <ProgressCircleValueText />
    </ProgressCircle>
  ),
};
