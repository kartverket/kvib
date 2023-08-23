import { Spinner as KvibSpinner, Stack as KvibStack } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibSpinner> = {
  title: "Komponenter/Spinner",
  component: KvibSpinner,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof KvibSpinner>;

export const Spinner: Story = {
  args: { children: "Spinner" },
  render: (args) => <KvibSpinner {...args} />,
};

export const SpinnerColors: Story = {
  args: { children: "Spinner" },
  render: (args) => (
    <KvibStack>
      <KvibSpinner {...args} color="blue" />
      <KvibSpinner {...args} color="green" />
      <KvibSpinner {...args} color="red" />
      <KvibSpinner {...args} color="gray" />
    </KvibStack>
  ),
};
