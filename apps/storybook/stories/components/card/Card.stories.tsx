import { Card as KvibCard, CardBody as KvibCardBody } from "@kvib/react";

import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibCard> = {
  title: "Komponenter/Card",
  component: KvibCard,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    size: {
      description: "Size of the component",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    variant: {
      description: "The variant of the component",
      table: {
        type: { summary: "elevated | outline | subtle" },
        defaultValue: { summary: "elevated" },
      },
      options: ["elevated", "outline", "subtle"],
      control: "radio",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibCard>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
KvibCard.displayName = "Card";
KvibCardBody.displayName = "CardBody";

export const Preview: Story = {
  render: args => (
    <KvibCard {...args}>
      <KvibCardBody>Card content</KvibCardBody>
    </KvibCard>
  ),
};
