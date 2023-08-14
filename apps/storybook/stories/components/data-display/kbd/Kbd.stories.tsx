import { Kbd as KvibKbd, Stack as KvibStack } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibKbd> = {
  title: "Komponenter/Data Display/Kbd",
  component: KvibKbd,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibKbd>;

export const Kbd: Story = {
  args: {},
  render: (args) => (
    <span>
      <KvibKbd {...args}>shift</KvibKbd> + <KvibKbd {...args}>H</KvibKbd>
    </span>
  ),
};

export const KbdModifier: Story = {
  args: {},
  render: (args) => (
    <KvibStack>
      <span>
        <KvibKbd {...args}>shift</KvibKbd> + <KvibKbd {...args}>H</KvibKbd>
      </span>
      <span>
        <KvibKbd {...args}>shift</KvibKbd> then <KvibKbd {...args}>H</KvibKbd>
      </span>
      <span>
        <KvibKbd {...args}>alt</KvibKbd> or <KvibKbd {...args}>option</KvibKbd>
      </span>
    </KvibStack>
  ),
};
