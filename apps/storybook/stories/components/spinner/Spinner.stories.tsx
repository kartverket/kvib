import { Spinner as KvibSpinner } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibSpinner> = {
  title: "Komponenter/Spinner",
  component: KvibSpinner,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    colorPalette: {
      description: "The color palette of the component",
      table: {
        type: { summary: "green | blue | gray" },
        defaultValue: { summary: "green" },
      },
      control: { type: "radio" },
      options: ["green", "blue", "gray"],
    },
    color: {
      description: "The color of the component",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "currentColor" },
      },
      control: "text",
    },
    size: {
      description: "The size of the component",
      table: {
        type: { summary: " sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibSpinner>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
KvibSpinner.displayName = "Spinner";

export const Preview: Story = {
  args: {
    colorPalette: "green",
    color: "colorPalette.500",
    size: "md",
  },

  render: args => <KvibSpinner {...args} />,
};
