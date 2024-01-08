import { FormControl, Timepicker as KvibTimepicker, FormLabel, Stack } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibTimepicker> = {
  title: "Skjemaelementer/Timepicker",
  component: KvibTimepicker,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
  argTypes: {
    size: {
      description: "The size of the Timepicker",
      options: ["xs", "sm", "md", "lg"],
      control: { type: "radio" },
      table: {
        type: { summary: '"xs" | "sm" | "md" | "lg"' },
        defaultValue: { summary: "md" },
      },
    },
    width: {
      description: "The width of the Timepicker",
      options: ["fit-content", "full"],
      control: { type: "radio" },
      table: {
        type: { summary: '"fit-content" | "full"' },
        defaultValue: { summary: "fit-content" },
      },
    },
    variant: {
      description: "The variant of the Timepicker",
      options: ["outline", "filled", "flushed", "unstyled"],
      control: { type: "radio" },
      table: {
        type: { summary: '"outline" | "filled" | "flushed" | "unstyled"' },
        defaultValue: { summary: "outline" },
      },
    },
    colorScheme: {
      description: "The color scheme of the Timepicker",
      options: ["green", "blue"],
      control: { type: "radio" },
      table: {
        type: { summary: '"green" | "blue"' },
        defaultValue: { summary: "green" },
      },
    },
    value: {
      description: "The current value of the Timepicker",
      control: { type: "object" },
      table: {
        type: { summary: "TimeValue" },
      },
    },
    defaultValue: {
      description: "The default value of the Timepicker",
      control: { type: "object" },
      table: {
        type: { summary: "TimeValue" },
      },
    },
    onChange: {
      description: "Callback function when the value changes",
      action: "onChange",
      table: {
        type: { summary: "(value: TimeValue) => void" },
      },
    },
    isDisabled: {
      description: "If true, the Timepicker will be disabled",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    isInvalid: {
      description: "If true, the Timepicker will be marked as invalid",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    minuteInterval: {
      description: "The interval between minutes in the Timepicker",
      control: { type: "number" },
      table: {
        type: { summary: "number" },
      },
    },
    ariaLabel: {
      description: "Provides an accessible label for the Timepicker",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibTimepicker>;

export const Timepicker: Story = {
  args: {},
  render: (args) => <KvibTimepicker {...args} />,
};

export const TimepickerInterval: Story = {
  args: {},
  render: (args) => (
    <Stack>
      <KvibTimepicker {...args} minuteInterval={15} />
      <KvibTimepicker {...args} minuteInterval={60} />
    </Stack>
  ),
};

export const TimepickerAppearance: Story = {
  args: {},
  render: (args) => (
    <Stack>
      <KvibTimepicker {...args} variant="outline" />
      <KvibTimepicker {...args} variant="filled" />
      <KvibTimepicker {...args} variant="flushed" colorScheme="blue" />
      <KvibTimepicker {...args} variant="unstyled" colorScheme="blue" />
    </Stack>
  ),
};

export const TimepickerSize: Story = {
  args: {},
  render: (args) => (
    <Stack>
      <KvibTimepicker {...args} size="xs" />
      <KvibTimepicker {...args} size="sm" />
      <KvibTimepicker {...args} size="md" />
      <KvibTimepicker {...args} size="lg" width="fit-content" />
      <KvibTimepicker {...args} size="md" width="full" />
    </Stack>
  ),
};

export const TimepickerForm: Story = {
  args: {},
  render: (args) => (
    <FormControl>
      <FormLabel>Tid</FormLabel>
      <KvibTimepicker {...args} />
    </FormControl>
  ),
};
