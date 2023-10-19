import { Datepicker as KvibDatepicker } from "@kvib/react/src/datepicker";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibDatepicker> = {
  title: "Komponenter/Datepicker",
  component: KvibDatepicker,
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
    type: {
      description: "Type",
      table: {
        type: { summary: "date | datetime-local" },
        defaultValue: { summary: "date" },
      },
      options: ["date", "datetime-local"],
      control: { type: "radio" },
    },
    isRequired: {
      description: "Toggles if input should be required",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    isInvalid: {
      description: "Toggles if input should be invalid",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    isDisabled: {
      description: "Toggles if input should be disabled",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
  },
};

export default meta;
type DatepickerStory = StoryObj<typeof KvibDatepicker>;

export const Datepicker: DatepickerStory = {
  args: {
    size: "md",
    variant: "outline",
    type: "date",
    isDisabled: false,
    isInvalid: false,
    isRequired: false,
  },
  render: (args) => <KvibDatepicker {...args} />,
};

export const DatepickerTest: DatepickerStory = {
  args: {
    size: "md",
    variant: "outline",
    type: "date",

    defaultMonth: new Date(2022, 8),

    fromMonth: new Date("2022-01-01"),

    toDate: new Date("2022-11-15"),
    showDropdownMonthYear: true,
    disableNavigation: false,
    showOutsideDays: true,
    showWeekNumber: true,
    disabledDays: [new Date("2022-10-31"), new Date("2022-07-04")],
  },
  render: (args) => <KvibDatepicker {...args} />,
};
