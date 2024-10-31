import { DateRangePicker as KvibDateRangePicker } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react/*";

const meta: Meta<typeof KvibDateRangePicker> = {
  title: "Komponenter/DateRangePicker",
  component: KvibDateRangePicker,
};

export default meta;
type Story = StoryObj<typeof KvibDateRangePicker>;

export const Preview: Story = {
  args: {
    showWeekNumber: true,
    showOutsideDays: true,
  },
  render: args => <KvibDateRangePicker {...args} />,
};
