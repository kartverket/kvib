import { Avatar as KvibAvatar } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibAvatar> = {
  title: "Komponenter/Avatar",
  component: KvibAvatar,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  args: {
    name: "Hans Hansen",
    src: "https://bit.ly/broken-link",
    size: "md",
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
    size: {
      description: "The size of the Avatar",
      table: {
        type: { summary: "2xs | xs | sm | md | lg | xl | 2xl" },
        defaultValue: { summary: "md" },
      },
      options: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl"],
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

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
KvibAvatar.displayName = "Avatar";

export const Preview: Story = {
  render: args => <KvibAvatar {...args} />,
};
