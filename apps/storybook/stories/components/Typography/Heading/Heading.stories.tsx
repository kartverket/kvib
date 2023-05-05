import { Heading as KvibHeading } from "@kvib/react/src/typography/Heading";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibHeading> = {
  title: "Komponenter/Typografi/Heading",
  component: KvibHeading,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    variant: {
      description: "Textstyle variant",
      table: {
        type: { summary: "title1 | title2 | title3 | title4" },
      },
      control: { type: "radio" },
      options: ["title1", "title2", "title3", "title4"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibHeading>;

export const Heading: Story = {
  render: (args) => <KvibHeading {...args}>Jeg er en tittel</KvibHeading>,
};
