import { Separator as KvibSeparator } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibSeparator> = {
  title: "Komponenter/Separator",
  component: KvibSeparator,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
  argTypes: {
    variant: {
      description: "The variant of the Divider",
      table: {
        type: { summary: "solid | dashed" },
        defaultValue: { summary: "solid" },
      },
      options: ["solid", "dashed"],
      control: "radio",
    },
    orientation: {
      description: "The orientation of the Divider",
      table: {
        type: { summary: "horizontal | vertical" },
        defaultValue: { summary: "horizontal" },
      },
      options: ["horizontal", "vertical"],
      control: "radio",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibSeparator>;

export const Preview: Story = {
  render: args => <KvibSeparator {...args} />,
};
