import { Kbd as KvibKbd, Stack as KvibStack } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibKbd> = {
  title: "Komponenter/Kbd",
  component: KvibKbd,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibKbd>;

export const Preview: Story = {
  args: {
    fontSize: "sm",
  },
  render: args => (
    <span>
      <KvibKbd {...args}>shift</KvibKbd> + <KvibKbd {...args}>H</KvibKbd>
    </span>
  ),
};

export const KbdModifier: Story = {
  render: args => (
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
