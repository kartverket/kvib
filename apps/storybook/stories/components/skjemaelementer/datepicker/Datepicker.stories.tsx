import { FormControl, FormLabel, Stack } from "@kvib/react/src";
import { Datepicker as KvibDatepicker } from "@kvib/react/src/datepicker";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibDatepicker> = {
  title: "Komponenter/Datepicker",
  component: KvibDatepicker,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
    a11y: {
      // This option disables all a11y checks on this story
    },
  },
  argTypes: {
    size: {
      description: "Size of input",
      table: {
        type: { summary: "lg | md | sm | xs" },
        defaultValue: { summary: "md" },
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
    isRequired: {
      description: "Toggles if input should be required",
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
    defaultSelected: {
      description: "A default date to be selected when the picker is displayed.",
      table: {
        type: { summary: "Date" },
      },
      control: "date",
    },

    defaultMonth: {
      description: "The month to display in the calendar by default.",
      table: {
        type: { summary: "Date" },
      },
      control: "date",
    },

    fromDate: {
      description: "The earliest date available for selection.",
      table: {
        type: { summary: "Date" },
      },
      control: "date",
    },

    toDate: {
      description: "The latest date available for selection.",
      table: {
        type: { summary: "Date" },
      },
      control: "date",
    },

    showDropdownMonthYear: {
      description:
        "Whether or not to show dropdowns for month and year selection. `fromDate` and `toDate` must be set.",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },

    disableNavigation: {
      description: "If set to true, navigation buttons (next/previous month) are hidden.",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },

    showOutsideDays: {
      description: "Whether or not to show the days that fall outside the current month.",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },

    showWeekNumber: {
      description: "Whether or not to display the week numbers.",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },

    disabledDays: {
      description: "A list of dates that should be disabled for selection.",
      table: {
        type: { summary: "Date[]" },
      },
    },

    useNative: {
      description: "Whether or not to use the native datepicker on mobile devices.",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    onChange: {
      description: "Sideeffect to be run when a date is selected.",
      table: {
        type: { summary: "(date: Date | undefined) => void" },
      },
    },
    colorScheme: {
      description: "Color scheme",
      table: {
        type: { summary: "blue | green" },
        defaultValue: { summary: "blue" },
      },
      options: ["blue", "green"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibDatepicker>;

export const Preview: Story = {
  args: {
    placeholder: "Velg dato",
    onChange: v => console.log("Datepicker changed", v),
    "aria-label": "Datepicker example",
  },
  render: args => <KvibDatepicker {...args} />,
};

export const DatepickerDetails: Story = {
  args: {
    showOutsideDays: true,
    showWeekNumber: true,
    placeholder: "Velg dato",
    "aria-label": "Datepicker example",
  },
  render: args => <KvibDatepicker {...args} />,
};

export const DatepickerAppearance: Story = {
  args: {
    placeholder: "Velg dato",
    "aria-label": "Datepicker example",
  },
  render: args => (
    <Stack gap="1rem">
      <KvibDatepicker variant="outline" {...args} />
      <KvibDatepicker variant="filled" {...args} />
      <KvibDatepicker colorScheme="blue" variant="flushed" {...args} />
      <KvibDatepicker colorScheme="blue" variant="unstyled" {...args} />
    </Stack>
  ),
};

export const DatepickerArea: Story = {
  args: {
    defaultSelected: new Date("2022-08-01"),
    fromDate: new Date("2022-08-01"),
    toDate: new Date("2022-12-15"),
    showDropdownMonthYear: true,
    disabledDays: [new Date("2022-08-16")],
    placeholder: "Velg dato",
    "aria-label": "Datepicker example",
  },
  render: args => <KvibDatepicker {...args} />,
};

export const DatepickerForm: Story = {
  args: { placeholder: "Velg dato", "aria-label": "Datepicker example" },
  render: args => (
    <FormControl isRequired>
      <FormLabel>Velg dato</FormLabel>
      <KvibDatepicker {...args} />
    </FormControl>
  ),
};
