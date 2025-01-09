import { ColorSwatch } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ColorSwatch> = {
  title: "Komponenter/Color Swatch",
  component: ColorSwatch,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  args: {
    value: "#EB5E41",
    size: "md",
  },
  argTypes: {
    value: {
      description: "The color value",
      table: {
        type: { summary: "string" },
      },
    },
    size: {
      description: "The size of the swatch",
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
type Story = StoryObj<typeof ColorSwatch>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
ColorSwatch.displayName = "ColorSwatch";

export const Preview: Story = {
  render: args => <ColorSwatch {...args} />,
};
