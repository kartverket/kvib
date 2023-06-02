import { Slider as KvibSlider } from "@kvib/react/src/slider/Slider";
import { SliderLabeled as KvibSliderLabeled } from "@kvib/react/src/slider/SliderLabeled";
import { SliderMark } from "@chakra-ui/react";
import { fontSizes, fontWeights } from "@kvib/react/src/theme/foundations";

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
    "aria-label": {
      description: "The static string to use used for `aria-label` if no visible label is used.",
      table: {
        type: { summary: "string" },
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
        defaultValue: { summary: "0" },
      },
      control: { type: "number" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibSlider>;

export const Slider: Story = {
  args: {
    colorScheme: "green",
    size: "md",
    orientation: "horizontal",
    "aria-label": "slider-ex",
    defaultValue: 30,
    min: 0,
    max: 100,
    id: "slider",
  },
  render: (args) => <KvibSlider {...args}></KvibSlider>,
};

export const SliderWithLabel: Story = {
  args: { ...Slider.args },
  render: (args) => (
    <KvibSliderLabeled {...args}>
      <SliderMark
        value={0}
        fontSize={fontSizes.xs}
        fontWeight={fontWeights.normal}
        lineHeight={"18px"}
        display={"flex"}
        height={"13px"}
        marginY={"5px"}
      >
        0
      </SliderMark>
      <SliderMark
        value={100}
        ml={"-5"}
        fontSize={fontSizes.xs}
        fontWeight={fontWeights.normal}
        lineHeight={"18px"}
        display={"flex"}
        height={"13px"}
        marginY={"5px"}
      >
        100
      </SliderMark>
    </KvibSliderLabeled>
  ),
};
