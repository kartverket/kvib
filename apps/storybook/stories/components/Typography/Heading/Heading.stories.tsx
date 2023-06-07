import { Heading as KvibHeading } from "@kvib/react/src/typography";
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
    size: {
      description: "Size",
      table: {
        type: { summary: "4xl | 3xl | 2xl | xl | lg | md | sm | xs | title1 | title2 | title3 | title4" },
        defaultValue: { summary: "4xl" },
      },
      control: { type: "radio" },
      options: ["4xl", "3xl", "2xl", "xl", "lg", "md", "sm", "xs", "title1", "title2", "title3", "title4"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibHeading>;

export const Heading: Story = {
  args: { size: "4xl" },
  render: (args) => <KvibHeading {...args}>Jeg er en tittel</KvibHeading>,
};
