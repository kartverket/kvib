import { Heading as KvibHeading, Stack as KvibStack } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibHeading> = {
  title: "Design Fundament/Heading",
  component: KvibHeading,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    size: {
      description: "The Size of the Heading",
      table: {
        type: { summary: "4xl | 3xl | 2xl | xl | lg | md | sm | xs" },
        defaultValue: { summary: "xl" },
      },
      options: ["4xl", "3xl", "2xl", "xl", "lg", "md", "sm", "xs"],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibHeading>;

export const Heading: Story = {
  args: {},
  render: (args) => <KvibHeading {...args}>Dette er en overskrift</KvibHeading>,
};

export const HeadingSizes: Story = {
  args: {},
  render: (args) => (
    <KvibStack spacing={6}>
      <KvibHeading {...args} as="h1" size="4xl" noOfLines={1}>
        (4xl) Kartverkets interaksjon- og designbibliotek
      </KvibHeading>
      <KvibHeading {...args} as="h2" size="3xl" noOfLines={1}>
        (3xl) Kartverkets interaksjon- og designbibliotek
      </KvibHeading>
      <KvibHeading {...args} as="h2" size="2xl" noOfLines={1}>
        (2xl) Kartverkets interaksjon- og designbibliotek
      </KvibHeading>
      <KvibHeading {...args} as="h2" size="xl">
        (xl) Kartverkets interaksjon- og designbibliotek
      </KvibHeading>
      <KvibHeading {...args} as="h3" size="lg">
        (lg) Kartverkets interaksjon- og designbibliotek
      </KvibHeading>
      <KvibHeading {...args} as="h4" size="md">
        (md) Kartverkets interaksjon- og designbibliotek
      </KvibHeading>
      <KvibHeading {...args} as="h5" size="sm">
        (sm) Kartverkets interaksjon- og designbibliotek
      </KvibHeading>
      <KvibHeading {...args} as="h6" size="xs">
        (xs) Kartverkets interaksjon- og designbibliotek
      </KvibHeading>
    </KvibStack>
  ),
};
