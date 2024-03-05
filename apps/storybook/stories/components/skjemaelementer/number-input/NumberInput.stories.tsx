import { FormControl, FormLabel, Stack } from "@kvib/react/src";
import { NumberInput as KvibNumberInput } from "@kvib/react/src/number-input/Number-Input";
import { NumberInputField as KvibNumberInputField } from "@kvib/react/src/number-input/Number-Input-Field";
import { NumberInputStepper as KvibNumberInputStepper } from "@kvib/react/src/number-input/Number-Input-Stepper";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibNumberInput> = {
  title: "Skjemaelementer/Number Input",
  component: KvibNumberInput,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
    a11y: {
      // This option disables all a11y checks on this story
      disable: true,
    },
  },
  argTypes: {
    max: {
      description: "Maximum value of the counter",
      table: {
        type: { summary: "number" },
      },
      control: "text",
    },
    min: {
      description: "Minimum value of the counter",
      table: {
        type: { summary: "number" },
      },
      control: "text",
    },
    precision: {
      description: "The number of decimal points used to round the value.",
      table: {
        type: { summary: "number" },
      },
      control: "text",
    },
    keepWithinRange: {
      description: "Toggles if value should be kept within the range of max and min.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    step: {
      description: "The step used to increment of decrement the value.",
      table: {
        type: { summary: "number" },
      },
      control: "text",
    },
    size: {
      description: "Size of input",
      table: {
        type: { summary: "lg | md | sm | xs" },
      },
      options: ["lg", "md", "sm", "xs"],
      control: { type: "radio" },
    },
    variant: {
      description: "Variant",
      table: {
        type: { summary: "outline | filled | flushed | unstyled" },
        defaultValue: { summary: "outline" },
      },
      options: ["outline", "filled", "flushed", "unstyled"],
      control: { type: "radio" },
    },
    allowMouseWheel: {
      description: "If true, the input's value will change based on mouse wheel scrolling",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    isRequired: {
      description: "Toggles if input should be required",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    isReadOnly: {
      description: "Toggles if input should be read-only",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    isInvalid: {
      description: "Toggles if input should be invalid",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    isDisabled: {
      description: "Toggles if input should be disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
  },
};

export default meta;
type NumberInputStory = StoryObj<typeof KvibNumberInput>;

export const NumberInput: NumberInputStory = {
  args: {
    variant: "outline",
    isDisabled: false,
    isInvalid: false,
    isReadOnly: false,
    isRequired: false,
  },
  render: (args) => (
    <KvibNumberInput {...args}>
      <KvibNumberInputField />
      <KvibNumberInputStepper />
    </KvibNumberInput>
  ),
};

export const NumberInputVariants: NumberInputStory = {
  args: {
    defaultValue: 1234,
  },
  render: (args) => (
    <Stack gap={5}>
      <KvibNumberInput {...args} variant={"outline"}>
        <KvibNumberInputField />
        <KvibNumberInputStepper />
      </KvibNumberInput>
      <KvibNumberInput {...args} variant={"filled"}>
        <KvibNumberInputField />
        <KvibNumberInputStepper />
      </KvibNumberInput>
      <KvibNumberInput {...args} variant={"flushed"}>
        <KvibNumberInputField />
        <KvibNumberInputStepper />
      </KvibNumberInput>
      <KvibNumberInput {...args} variant={"unstyled"}>
        <KvibNumberInputField />
        <KvibNumberInputStepper />
      </KvibNumberInput>
    </Stack>
  ),
};

export const NumberInputForm: NumberInputStory = {
  args: {},
  render: (args) => (
    <FormControl isRequired>
      <FormLabel>Årstall</FormLabel>
      <KvibNumberInput {...args}>
        <KvibNumberInputField />
        <KvibNumberInputStepper />
      </KvibNumberInput>
    </FormControl>
  ),
};

export const NumberInputMinMaxValue: NumberInputStory = {
  args: { defaultValue: 12, min: 10, max: 20 },
  render: (args) => (
    <KvibNumberInput {...args}>
      <KvibNumberInputField />
      <KvibNumberInputStepper />
    </KvibNumberInput>
  ),
};

export const NumberInputPrecision: NumberInputStory = {
  args: { precision: 2 },
  render: (args) => (
    <KvibNumberInput {...args}>
      <KvibNumberInputField />
      <KvibNumberInputStepper />
    </KvibNumberInput>
  ),
};

export const NumberInputSizes: NumberInputStory = {
  render: () => (
    <Stack>
      <KvibNumberInput size={"xs"}>
        <KvibNumberInputField />
        <KvibNumberInputStepper />
      </KvibNumberInput>
      <hr />
      <KvibNumberInput size={"sm"}>
        <KvibNumberInputField />
        <KvibNumberInputStepper />
      </KvibNumberInput>
      <hr />
      <KvibNumberInput size={"md"}>
        <KvibNumberInputField />
        <KvibNumberInputStepper />
      </KvibNumberInput>
      <hr />
      <KvibNumberInput size={"lg"}>
        <KvibNumberInputField />
        <KvibNumberInputStepper />
      </KvibNumberInput>
    </Stack>
  ),
};
