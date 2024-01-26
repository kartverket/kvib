import {
  Box,
  FormControl,
  FormLabel,
  KvibProvider,
  Stack,
  extendTheme,
  theme,
  withDefaultColorScheme,
} from "@kvib/react/src";
import { Datepicker as KvibDatepicker } from "@kvib/react/src/datepicker";
import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { fn, expect } from "@storybook/test";

const meta: Meta<typeof KvibDatepicker> = {
  title: "Skjemaelementer/Datepicker",
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
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    isInvalid: {
      description: "Toggles if input should be invalid",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    isDisabled: {
      description: "Toggles if input should be disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
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
      control: "array",
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
      control: "function",
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
type DatepickerStory = StoryObj<typeof KvibDatepicker>;

export const Datepicker: DatepickerStory = {
  args: { onChange: (v) => console.log("Datepicker changed", v) },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
  render: (args) => (
    <Box h="25rem">
      <KvibDatepicker aria-label="Datepicker" {...args} />
    </Box>
  ),
};

const customTheme = extendTheme(withDefaultColorScheme({ colorScheme: "blue" }), theme);
export const DatepickerBlueTheme: DatepickerStory = {
  render: (args) => (
    <KvibProvider theme={customTheme}>
      <KvibDatepicker aria-label="Datepicker example" {...args} />
    </KvibProvider>
  ),
};

export const DatepickerDetails: DatepickerStory = {
  args: {
    showOutsideDays: true,
    showWeekNumber: true,
  },
  render: (args) => (
    <Box h="25rem">
      <KvibDatepicker aria-label="Datepicker example" {...args} />
    </Box>
  ),
};

export const DatepickerAppearance: DatepickerStory = {
  args: {},
  render: (args) => (
    <Stack gap="1rem" h="30rem">
      <KvibDatepicker aria-label="Datepicker" variant="outline" {...args} />
      <KvibDatepicker aria-label="Datepicker" variant="filled" {...args} />
      <KvibDatepicker aria-label="Datepicker" colorScheme="blue" variant="flushed" {...args} />
      <KvibDatepicker aria-label="Datepicker" colorScheme="blue" variant="unstyled" {...args} />
    </Stack>
  ),
};

export const DatepickerArea: DatepickerStory = {
  args: {
    defaultSelected: new Date("2022-08-01"),
    fromDate: new Date("2022-08-01"),
    toDate: new Date("2022-12-15"),
    showDropdownMonthYear: true,
    disabledDays: [new Date("2022-08-16")],
  },
  render: (args) => (
    <Box h="23rem">
      <KvibDatepicker aria-label="Datepicker example" {...args} />
    </Box>
  ),
};

export const DatepickerForm: DatepickerStory = {
  args: {},
  render: (args) => (
    <Box h="25rem">
      <FormControl isRequired>
        <FormLabel>Velg dato</FormLabel>
        <KvibDatepicker aria-label="Datepicker" {...args} />
      </FormControl>
    </Box>
  ),
};

export const DatepickerOpen: DatepickerStory = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole("button"));
  },
};

export const DatepickerSelectDate: DatepickerStory = {
  args: {
    onChange: fn(),
    defaultSelected: new Date("01.01.2023"),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    await DatepickerOpen.play({ canvasElement });
    await userEvent.click(canvas.getByText("10"));

    await expect(args.onChange).toHaveBeenCalled();
  },
};
