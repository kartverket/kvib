import { IconButton as KvibIconButton } from "@kvib/react";

import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibIconButton> = {
  title: "Komponenter/Icon Button",
  component: KvibIconButton,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  args: {
    icon: "favorite",
    variant: "solid",
    size: "md",
    colorPalette: "green",
    iconFill: false,
    loading: false,
    disabled: false,
  },
  argTypes: {
    size: {
      description: "Size of Icon button",
      table: {
        type: { summary: "xs | sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["xs", "sm", "md", "lg"],
      control: { type: "select" },
    },
    variant: {
      description: "The variant of the IconButton.",
      table: {
        type: { summary: "solid | subtle | ghost | plain" },
        defaultValue: { summary: "primary" },
      },
      options: ["solid", "subtle", "ghost", "plain"],
      control: { type: "select" },
    },
    disabled: {
      description: "If true, the button will be disabled.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    colorPalette: {
      control: {
        type: "select",
      },
      options: ["green", "blue", "red", "gray"],
      table: {
        type: { summary: "green | blue | red | gray" },
        defaultValue: { summary: "green" },
      },
    },
    iconFill: {
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    loading: {
      description: "If true, the button will show a spinner.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibIconButton>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
KvibIconButton.displayName = "IconButton";

export const Preview: Story = {
  render: args => <KvibIconButton {...args} />,
};
