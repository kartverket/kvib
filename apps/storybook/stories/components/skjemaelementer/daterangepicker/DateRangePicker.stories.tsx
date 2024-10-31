import { DateRange, DateRangePickerProps, DateRangePicker as KvibDateRangePicker } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react/*";
import { useState } from "react";

const meta: Meta<typeof KvibDateRangePicker> = {
  title: "Komponenter/DateRangePicker",
  component: KvibDateRangePicker,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
  args: {
    showOutsideDays: true,
    showWeekNumber: false,
    colorScheme: "green",
  },
  argTypes: {
    showWeekNumber: {
      description: "Vis ukenummer",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    showOutsideDays: {
      description: "Vis datoer utenfor valgt måned",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    colorScheme: {
      description: "Fargepalett",
      table: {
        type: { summary: "green | blue" },
        defaultValue: { summary: "green" },
      },
      options: ["green", "blue"],
      control: { type: "radio" },
    },
    footer: {
      description: "Tekst som vises nederst i datovelgeren",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    selected: {
      description: "Valgt periode",
      table: {
        type: { summary: "DateRange" },
      },
      control: false,
    },
    onSelect: {
      description: "Callback som kalles når en periode velges",
      table: {
        type: { summary: "OnSelectHandler<DateRange | undefined>" },
      },
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibDateRangePicker>;

const DateRangePickerExample = (props: DateRangePickerProps) => {
  const { selected, onSelect, ...rest } = props;
  const [selectedDates, setSelectedDates] = useState<DateRange | undefined>(undefined);
  return <KvibDateRangePicker selected={selectedDates} onSelect={setSelectedDates} {...rest} mode="range" />;
};

export const Preview: Story = {
  render: args => <DateRangePickerExample {...args} />,
};
