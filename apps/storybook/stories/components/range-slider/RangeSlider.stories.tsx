import {
  Icon,
  RangeSlider as KvibRangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Stack as KvibStack,
} from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibRangeSlider> = {
  title: "Komponenter/Range Slider",
  component: KvibRangeSlider,
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
        type: { summary: "string[]" },
      },
      control: "array",
    },

    "aria-labelledby": {
      description:
        "The static string `aria-labelledby` that points to the ID of the element that serves as label for the slider",
      table: {
        type: { summary: "string[]" },
      },
      control: "array",
    },

    "aria-valuetext": {
      description: "The static string to use used for `aria-valuetext`",
      table: {
        type: { summary: "string[]" },
      },
      control: "array",
    },

    defaultValue: {
      description: "The initial value of the slider in uncontrolled mode",
      table: {
        type: { summary: "number[]" },
      },
      control: "array",
    },

    direction: {
      description: "The writing mode",
      table: {
        type: { summary: '"ltr" | "rtl"' },
        defaultValue: { summary: "ltr" },
      },
      options: ["ltr", "rtl"],
      control: "radio",
    },

    focusThumbOnChange: {
      description: "If false, the slider handle will not capture focus when value changes.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
      control: "boolean",
    },

    getAriaValueText: {
      description:
        "Function that returns the `aria-valuetext` for screen readers. It is mostly used to generate a more human-readable representation of the value for assistive technologies",
      table: {
        type: { summary: "(value: number) => string" },
      },
      control: "text",
    },

    id: {
      description: "The base id to use for the slider and its components",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },

    isDisabled: {
      description: "If true, the slider will be disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },

    isReadOnly: {
      description: "If true, the slider will be in `read-only` state",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },

    isReversed: {
      description: "If true, the value will be incremented or decremented in reverse.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },

    max: {
      description: "The maximum allowed value of the slider. Cannot be less than min.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 100 },
      },
      control: "number",
    },

    min: {
      description: "The minimum allowed value of the slider. Cannot be greater than max.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 0 },
      },
      control: "number",
    },

    minStepsBetweenThumbs: {
      description:
        "The minimum distance between slider thumbs. Useful for preventing the thumbs from being too close together.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 0 },
      },
      control: "number",
    },

    name: {
      description: "The name attribute of the hidden input field. This is particularly useful in forms",
      table: {
        type: { summary: "string | string[]" },
      },
      control: "array",
    },

    step: {
      description: "The step in which increments/decrements have to be made",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 1 },
      },
      control: "number",
    },

    value: {
      description: "The value of the slider in controlled mode",
      table: {
        type: { summary: "number[]" },
      },
      control: "array",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibRangeSlider>;

export const RangeSlider: Story = {
  args: { defaultValue: [10, 30] },
  render: (args) => (
    <KvibRangeSlider aria-label={["min", "max"]} {...args}>
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} />
      <RangeSliderThumb index={1} />
    </KvibRangeSlider>
  ),
};

export const RangeSliderColors: Story = {
  args: { defaultValue: [10, 40] },
  render: (args) => (
    <KvibStack gap={5}>
      <KvibRangeSlider {...args} aria-label={["min", "max"]} colorScheme="green">
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </KvibRangeSlider>

      <KvibRangeSlider {...args} aria-label={["min", "max"]} colorScheme="blue">
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </KvibRangeSlider>

      <KvibRangeSlider {...args} aria-label={["min", "max"]} colorScheme="red">
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </KvibRangeSlider>

      <KvibRangeSlider {...args} aria-label={["min", "max"]} colorScheme="gray">
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </KvibRangeSlider>
    </KvibStack>
  ),
};

export const RangeSliderOrientation: Story = {
  args: {
    defaultValue: [20, 60],
    minH: "32",
    orientation: "vertical",
  },
  render: (args) => (
    <KvibRangeSlider aria-label={["min", "max"]} {...args}>
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} />
      <RangeSliderThumb index={1} />
    </KvibRangeSlider>
  ),
};

export const RangeSliderCustomizing: Story = {
  args: { defaultValue: [30, 80] },
  render: (args) => (
    <KvibRangeSlider {...args} aria-label={["min", "max"]}>
      <RangeSliderTrack bg="red.100">
        <RangeSliderFilledTrack bg="tomato" />
      </RangeSliderTrack>
      <RangeSliderThumb boxSize={6} index={0}>
        <Icon icon="equalizer" />
      </RangeSliderThumb>
      <RangeSliderThumb boxSize={6} index={1}>
        <Icon icon="equalizer" />
      </RangeSliderThumb>
    </KvibRangeSlider>
  ),
};

export const RangeSliderDiscrete: Story = {
  args: { defaultValue: [120, 240], min: 0, max: 300, step: 30 },
  render: (args) => (
    <KvibRangeSlider {...args} aria-label={["min", "max"]}>
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} />
      <RangeSliderThumb index={1} />
    </KvibRangeSlider>
  ),
};
