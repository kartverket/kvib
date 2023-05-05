import { Heading as KvibHeading } from "@kvib/react/src/components/typography";
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
        defaultValue: { summary: "title1" },
      },
      control: { type: "radio" },
      options: ["title1", "title2", "title3", "title4"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibHeading>;

export const Heading: Story = {
  args: { variant: "title1" },
  render: (args) => (
    <KvibHeading variant="title1" {...args}>
      Jeg er en tittel
    </KvibHeading>
  ),
};
