import { Alert as KvibAlert } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibAlert> = {
  title: "Komponenter/Alert",
  component: KvibAlert,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
    layout: "centered",
  },
  args: {
    title: "Alert title",
    status: "info",
    variant: "subtle",
    size: "md",
  },
  argTypes: {
    title: {
      description: "The title of the alert.",
      table: { type: { summary: "string" } },
      defaultValue: { summary: "" },
      control: { type: "text" },
    },
    status: {
      description: "The status of the alert. This changes the color of the alert.",
      table: { type: { summary: "error | success | warning | info | neutral" } },
      options: ["error", "success", "warning", "info", "neutral"],
      defaultValue: { summary: "info" },
      control: { type: "radio" },
    },
    variant: {
      description: "The variant of the alert.",
      table: { type: { summary: "subtle | surface | outline | solid" } },
      options: ["subtle", "solid", "outline", "surface"],
      defaultValue: { summary: "subtle" },
      control: { type: "radio" },
    },
    size: {
      description: "The size of the alert.",
      table: { type: { summary: "sm | md | lg" } },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibAlert>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
KvibAlert.displayName = "Alert";

export const Preview: Story = {
  render: args => <KvibAlert {...args}>Informative description.</KvibAlert>,
};
