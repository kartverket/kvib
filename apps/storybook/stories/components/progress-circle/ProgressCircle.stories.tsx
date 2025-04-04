import { ProgressCircle, ProgressCircleProps, ProgressCircleRing } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProgressCircle> = {
  title: "Komponenter/Progress Circle",
  component: ProgressCircle,
  parameters: {
    docs: {
      story: { inline: true },
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

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
ProgressCircle.displayName = "ProgressCircle";
ProgressCircleRing.displayName = "ProgressCircleRing";

export const Preview: Story = {
  render: (args: ProgressCircleProps) => (
    <ProgressCircle {...args}>
      <ProgressCircleRing />
    </ProgressCircle>
  ),
};
