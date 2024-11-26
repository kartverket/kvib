import { TagProps } from "@kvib/react";
import { Tag as KvibTag } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibTag> = {
  title: "Komponenter/Tag",
  component: KvibTag,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    variant: {
      description: "The variant of the component.",
      table: {
        type: { summary: "solid | outline | plain" },
      },
      defaultValue: { summary: "solid" },
      options: ["solid", "outline", "plain"],
      control: { type: "radio" },
    },
    colorPalette: {
      description: "The visual color appearance of the Tag",
      table: {
        type: { summary: "green | blue | red | gray" },
        defaultValue: { summary: "gray" },
      },
      options: ["green", "blue", "red", "gray"],
      control: "radio",
    },
    size: {
      description: "The size of the Tag",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibTag>;

export const Preview: Story = {
  render: (args: TagProps) => <KvibTag {...args}>Eksempeltag</KvibTag>,
};
