import { Slider as KvibSlider } from "@kvib/react/src/slider/Slider";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibSlider> = {
  title: "Komponenter/Slider/Slider",
  component: KvibSlider,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    colorScheme: {
      description: "Color of slider",
      table: {
        type: { summary: "green | blue" },
        defaultValue: { summary: "green" },
      },
      options: ["green", "blue"],
      control: { type: "radio" },
    },
    size: {
      description: "Size of slider",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    orientation: {
      description: "Orientation of the slider",
      table: {
        type: { summary: "horizontal | vertical" },
        defaultValue: { summary: "horizontal" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibSlider>;

export const Slider: Story = {
  render: () => <KvibSlider></KvibSlider>,
};
