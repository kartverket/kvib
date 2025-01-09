import { Badge as KvibBadge } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibBadge> = {
  title: "Komponenter/Badge",
  component: KvibBadge,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
    layout: "centered",
  },
  args: {
    colorPalette: "gray",
    variant: "subtle",
  },
  argTypes: {
    variant: {
      description: "The variant of the badge",
      table: {
        type: { summary: "solid | subtle | outline" },
        defaultValue: { summary: "subtle" },
      },
      options: ["solid", "subtle", "outline"],
      control: "radio",
    },
    colorPalette: {
      description: "The visual color appearance of the badge",
      table: {
        type: { summary: "green | blue | red | gray" },
      },
      defaultValue: { summary: "gray" },
      options: ["green", "blue", "red", "gray"],
      control: "radio",
    },
    size: {
      description: "The size of the badge",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["sm", "md", "lg"],
      control: "radio",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibBadge>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
KvibBadge.displayName = "Badge";

export const Preview: Story = {
  render: args => <KvibBadge {...args}>Badge</KvibBadge>,
};
