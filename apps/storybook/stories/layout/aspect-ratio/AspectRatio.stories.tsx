import { Image, AspectRatio as KvibAspectRatio } from "@kvib/react";

import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibAspectRatio> = {
  title: "Komponenter/Layout/Aspect Ratio",
  component: KvibAspectRatio,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
    a11y: {
      disable: true,
    },
  },
  argTypes: {
    ratio: {
      description: "The aspect ratio of the Box. Common values are: `21/9`, `16/9`, `9/16`, `4/3`, `1.85/1`",
      table: { type: { summary: "ResponsiveValue<number>" } },
      control: "number",
    },
    w: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibAspectRatio>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
KvibAspectRatio.displayName = "AspectRatio";
Image.displayName = "Image";

export const Preview: Story = {
  args: { ratio: 4 / 3, w: "560px" },
  render: args => (
    <KvibAspectRatio {...args}>
      <Image
        alt="trees"
        src="https://images.unsplash.com/photo-1477768663691-75454fd8e870?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      />
    </KvibAspectRatio>
  ),
  parameters: {
    layout: "centered",
  },
};
