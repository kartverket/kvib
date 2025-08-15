import { Logo as KvibLogo } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibLogo> = {
  title: "Komponenter/Logo",
  component: KvibLogo,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    label: {
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    variant: {
      table: {
        type: { summary: "vertical | horizontal | symbol" },
        defaultValue: { summary: "vertical" },
      },
      options: ["vertical", "horizontal", "symbol"],
      control: { type: "radio" },
    },
    size: {
      table: {
        type: { summary: "number" },
      },
      control: "number",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibLogo>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
(KvibLogo as any).displayName = "Logo";

export const Preview: Story = {
  args: { label: "Logo" },
  render: args => <KvibLogo {...args} />,
};
