import { Skeleton as KvibSkeleton } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibSkeleton> = {
  title: "Komponenter/Skeleton",
  component: KvibSkeleton,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    loading: {
      description: "If true, the skeleton will be visible",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    variant: {
      description: "The variant of the skeleton",
      table: {
        type: { summary: "pulse | shine" },
        defaultValue: { summary: "pulse" },
      },
      control: "radio",
      options: ["pulse", "shine"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibSkeleton>;

export const Preview: Story = {
  render: args => <KvibSkeleton {...args} height="20px" />,
};
