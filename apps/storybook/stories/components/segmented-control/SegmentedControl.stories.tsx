import { SegmentedControl } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SegmentedControl> = {
  title: "Komponenter/Segmented Control",
  component: SegmentedControl,
  parameters: {
    docs: {
      story: { inline: true },
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

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
SegmentedControl.displayName = "SegmentedControl";

export const Preview: Story = {
  args: {
    items: [
      { value: "one", label: "Item 1" },
      { value: "two", label: "Item 2" },
    ],
  },
  render: args => <SegmentedControl {...args} />,
};
