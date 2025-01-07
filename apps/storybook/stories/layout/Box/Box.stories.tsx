import { Box as KvibBox } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibBox> = {
  title: "Komponenter/Box",
  component: KvibBox,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibBox>;

export const Preview: Story = {
  args: { backgroundColor: "green.50" },
  render: args => <KvibBox {...args}>En veldig enkel boks</KvibBox>,
};
