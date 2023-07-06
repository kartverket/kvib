import { Slider as KvibSlider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark } from "@kvib/react/src/slider";
import { Tooltip } from "@kvib/react/src/tooltip";

import React from "react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibSlider> = {
  title: "Komponenter/Slider",
  component: KvibSlider,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
    // a11y: {
    //     // This option disables all a11y checks on this story
    //     disable: true,
    // },
  },
  argTypes: {
    "aria-label": {
      description: "The static string to use used for `aria-label` if no visible label is used.",
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    "aria-labelledby": {
      description:
        "The static string `aria-labelledby` that points to the ID of the element that serves as label for the slider.",
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    "aria-valuetext": {
      description: "The static string to use used for `aria-valuetext`",
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    getAriaValueText: {
      description:
        "Function that returns the `aria-valuetext` for screen readers. It is mostly used to generate a more human-readable representation of the value for assistive technologies",
      table: {
        type: { summary: "(value: number) => string" },
      },
      control: { type: "text" },
    },
    id: {
      description: "The base id to use for the slider and its components",
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    colorScheme: {
      description: "Color of slider",
      table: {
        type: { summary: "green | blue| gray | red" },
        defaultValue: { summary: "blue" },
      },
      options: ["green", "blue", "gray", "red"],
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
    min: {
      description: "The minimum allowed value of the slider. Cannot be greater than max.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
      control: { type: "number" },
    },
    max: {
      description: "The maximum allowed value of the slider. Cannot be less than min.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "100" },
      },
      control: { type: "number" },
    },
    isDisabled: {
      description: "If true, the slider will be disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    defaultValue: {
      description: "The initial value of the slider in uncontrolled mode",
      table: {
        type: { summary: "number" },
      },
      control: { type: "number" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibSlider>;

export const Slider: Story = {
  args: {
    "aria-label": "sliderDefault",
    defaultValue: 30,
    id: "slider",
  },
  render: (args) => (
    <KvibSlider {...args}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </KvibSlider>
  ),
};

export const SliderDiscrete: Story = {
  args: {
    "aria-label": "sliderDiscrete",
    id: "slider",
    step: 10,
  },
  render: (args) => (
    <KvibSlider {...args}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </KvibSlider>
  ),
};

const SliderWithTooltip = () => {
  const [sliderValue, setSliderValue] = React.useState(5);
  const [showTooltip, setShowTooltip] = React.useState(false);
  return (
    <KvibSlider
      id="slider"
      aria-label="sliderWithTooltip"
      defaultValue={5}
      onChange={(v) => setSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <SliderMark value={25} mt="1" ml="-2.5" fontSize="sm">
        25%
      </SliderMark>
      <SliderMark value={50} mt="1" ml="-2.5" fontSize="sm">
        50%
      </SliderMark>
      <SliderMark value={75} mt="1" ml="-2.5" fontSize="sm">
        75%
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip hasArrow placement="top" isOpen={showTooltip} label={`${sliderValue}%`}>
        <SliderThumb />
      </Tooltip>
    </KvibSlider>
  );
};

export const SliderTooltip: Story = {
  render: () => <SliderWithTooltip />,
};
