import { SegmentedControl, SegmentedControlProps } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SegmentedControl> = {
  title: "Komponenter/Segmented Control",
  component: SegmentedControl,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
  argTypes: {
    defaultValue: {
      description:
        "The initial value of the segment group when it is first rendered. Use when you do not need to control the state of the segment group.",
      table: {
        type: { summary: "string" },
      },
    },
    colorPalette: {
      description: "Color palette of the component",
      table: {
        type: {
          summary: "green | blue | gray | red",
        },
        defaultValue: { summary: "green" },
      },
      options: ["green", "blue", "gray", "red"],
      control: { type: "radio" },
    },
    size: {
      description: "Size of the component",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    orientation: {
      description: "Orientation of the component",
      table: {
        type: { summary: "horizontal | vertical" },
        defaultValue: { summary: "horizontal" },
      },
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
    },
    value: {
      description: "The value of the checked segment",
      table: {
        type: { summary: "string" },
      },
    },
    onValueChange: {
      description: "Callback invoked when the value changes",
      table: {
        type: { summary: "(details: ValueChangeDetails) => void" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SegmentedControl>;

const SegmentedControlExample = (args: SegmentedControlProps) => {
  return <SegmentedControl {...args} />;
};

export const Preview: Story = {
  args: {
    items: [
      { value: "en", label: "En" },
      { value: "to", label: "To" },
      { value: "tre", label: "Tre" },
    ],
  },
  render: args => <SegmentedControlExample {...args} />,
};
