import { Code as KvibCode } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibCode> = {
  title: "Komponenter/Code",
  component: KvibCode,
  parameters: {
    docs: {
      story: { inline: true },
    },
    layout: "centered",
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
      description: "The visual color appearance of the component",
      table: {
        type: { summary: "green | blue | red | gray | orange" },
        defaultValue: { summary: "gray" },
      },
      options: ["green", "blue", "red", "gray", "orange"],
      control: "radio",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibCode>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
KvibCode.displayName = "Code";

export const Preview: Story = {
  render: args => <KvibCode {...args}>$ npm install @kvib/react</KvibCode>,
};
