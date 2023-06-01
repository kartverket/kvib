import { Slider as KvibSlider } from "@kvib/react/src/slider/Slider";
import { SliderLabeled as KvibSliderLabeled, Tooltip as KvibSliderTooltip } from "@kvib/react/src/slider/SliderLabeled";
import { SliderFilledTrack, SliderMark, SliderThumb, SliderTrack } from "@chakra-ui/react";

import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

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
      options: ["vertical", "horizontal"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibSlider>;

export const Slider: Story = {
  args: { colorScheme: "green", size: "md", orientation: "horizontal" },
  render: (args) => <KvibSlider {...args} aria-label="slider-ex" defaultValue={30}></KvibSlider>,
};

//TODO-BUGFIX

const [sliderValue, setSliderValue] = useState(5);
const [showTooltip, setShowTooltip] = useState(false);
export const SliderWithLabel: Story = {
  args: { ...Slider.args, setSliderValue, setShowTooltip, sliderValue, showTooltip },
  render: (...args) => (
    <KvibSliderLabeled
      {...args}
      id="slider"
      defaultValue={5}
      min={0}
      max={100}
      // onMouseEnter={() => setShowTooltip(true)}
      // onMouseLeave={() => setShowTooltip(false)}
      // onChange={(val) => setSliderValue(val)}
      aria-label="slider-labeled-ex"
    >
      <SliderMark value={0} ml="-2">
        0%
      </SliderMark>
      <SliderMark value={100} ml="-5">
        100%
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <KvibSliderTooltip isOpen={showTooltip} label={`${sliderValue}%`}>
        <SliderThumb />
      </KvibSliderTooltip>
    </KvibSliderLabeled>
  ),
};
