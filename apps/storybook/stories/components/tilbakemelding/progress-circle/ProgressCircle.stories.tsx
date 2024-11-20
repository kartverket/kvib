import { ProgressCircle, ProgressCircleProps, ProgressCircleRing } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProgressCircle> = {
  title: "Komponenter/Progress Circle",
  component: ProgressCircle,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  args: {
    value: 80,
    colorPalette: "green",
  },
  argTypes: {
    /** The value of the component */
    value: {
      table: {
        type: { summary: "number" },
      },
      defaultValue: { summary: 80 },
      control: "number",
    },

    /** The color of the component */
    colorPalette: {
      table: {
        type: { summary: "green | blue" },
        defaultValue: { summary: "green" },
      },
      control: "radio",
      options: ["green", "blue"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressCircle>;

export const Preview: Story = {
  render: (args: ProgressCircleProps) => (
    <ProgressCircle {...args}>
      <ProgressCircleRing />
    </ProgressCircle>
  ),
};
