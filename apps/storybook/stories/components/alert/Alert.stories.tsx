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
  },
  args: {
    title: "Dette er tittelen!",
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

export const Preview: Story = {
  render: args => <KvibAlert {...args}>Dette er beskrivelsen.</KvibAlert>,
};
