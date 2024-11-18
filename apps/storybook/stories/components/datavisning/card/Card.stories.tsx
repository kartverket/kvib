import { Card as KvibCard, CardBody as KvibCardBody, Text as KvibText } from "@kvib/react/src/";

import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibCard> = {
  title: "Komponenter/Card",
  component: KvibCard,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
  argTypes: {
    direction: {
      table: { type: { summary: "ResponsiveValue<FlexDirection>" } },
      control: "text",
    },
    size: {
      description: "Size of the Card",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    variant: {
      description: "The variant of the Card",
      table: {
        type: { summary: "elevated | outline | filled" },
        defaultValue: { summary: "elevated" },
      },
      options: ["elevated", "outline", "filled", "unstyled"],
      control: "radio",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibCard>;

export const Preview: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
  render: args => (
    <KvibCard {...args}>
      <KvibCardBody>
        <KvibText>Se alle endringer på eiendomsgrenser i år.</KvibText>
      </KvibCardBody>
    </KvibCard>
  ),
};
