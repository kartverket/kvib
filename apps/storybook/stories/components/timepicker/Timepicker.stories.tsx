import { FormControl, Timepicker as KvibTimepicker, FormLabel, Stack } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibTimepicker> = {
  title: "Komponenter/Timepicker",
  component: KvibTimepicker,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
  argTypes: {},
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
