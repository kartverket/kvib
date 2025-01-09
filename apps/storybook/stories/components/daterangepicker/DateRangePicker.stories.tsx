import { DateRange, DateRangePicker as KvibDateRangePicker } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof KvibDateRangePicker> = {
  title: "Komponenter/DateRangePicker",
  component: KvibDateRangePicker,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  args: {
    showOutsideDays: false,
    showWeekNumber: false,
    showDropdownMonthYear: false,
    colorPalette: "green",
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
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    showDropdownMonthYear: {
      description: "Vis dropdown for å velge måned og år",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    colorPalette: {
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

export const Preview: Story = {
  render: args => {
    const [selected, setSelected] = useState<DateRange | undefined>(args.selected);
    return <KvibDateRangePicker {...args} selected={selected} onSelect={setSelected} />;
  },
};
