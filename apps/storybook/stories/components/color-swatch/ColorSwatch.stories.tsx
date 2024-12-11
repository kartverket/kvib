import { ColorSwatch, ColorSwatchProps } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ColorSwatch> = {
  title: "Komponenter/Color Swatch",
  component: ColorSwatch,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
  args: {
    value: "#CF914A",
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

const ColorSwatchExample = (props: ColorSwatchProps) => <ColorSwatch {...props} />;

export const Preview: Story = {
  render: args => <ColorSwatchExample {...args} />,
};
