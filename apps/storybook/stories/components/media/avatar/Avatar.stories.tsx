import { Avatar as KvibAvatar } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibAvatar> = {
  title: "Komponenter/Avatar",
  component: KvibAvatar,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  args: {
    name: "Hans Hansen",
    src: "https://bit.ly/broken-link",
    size: "md",
    showBorder: false,
  },
  argTypes: {
    name: {
      description:
        "The name of the person in the avatar. - if src has loaded, the name will be used as the alt attribute of the img - If src is not loaded, the name will be used to create the initials",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    showBorder: {
      description: "If true, the Avatar will show a border around it. Best for a group of avatars",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    size: {
      description: "The size of the Avatar",
      table: {
        type: { summary: "2xs | xs | sm | md | lg | xl | 2xl | full" },
        defaultValue: { summary: "md" },
      },
      options: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "full"],
      control: { type: "radio" },
    },
    src: {
      description: "The image url of the Avatar",
      table: {
        type: { summary: "String" },
      },
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibAvatar>;

export const Preview: Story = {
  render: args => <KvibAvatar {...args} />,
};
