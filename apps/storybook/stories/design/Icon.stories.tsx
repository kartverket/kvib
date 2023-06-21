import { Icon as KvibIcon } from "@kvib/react/src/icon";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibIcon> = {
  title: "Design Fundament/Ikoner**",
  component: KvibIcon,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    color: {
      control: color,
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibIcon>;

export const defaultIcon: Story = {
  args: { icon: "warning" },
  render: (args) => <KvibIcon {...args} />,
};
