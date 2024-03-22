import { Box as KvibBox, Heading as KvibHeading, Highlight as KvibHighlight, Text as KvibText } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibHighlight> = {
  title: "Datavisning/Highlight",
  component: KvibHighlight,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    query: {
      name: "query*",
      description: "The highlighted word",
      table: {
        type: { summary: "string | string[]" },
      },
      control: "text",
    },
    styles: {
      description: "The style for the highlighted word",
      table: {
        type: { summary: "SystemStyleObject" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibHighlight>;

export const Highlight: Story = {
  args: { query: "fremheve", styles: { px: "1", py: "1", bg: "orange.100" } },
  render: (args) => <KvibHighlight {...args}>Det er mulig å fremheve ord med Highlight.</KvibHighlight>,
};

export const HighlightMultiple: Story = {
  args: {
    query: ["skjøte", "hjemmelserklæring", "hjemmelsoverføring"],
    styles: { px: "2", py: "1", rounded: "full", bg: "teal.100" },
  },
  render: (args) => (
    <KvibHeading lineHeight="tall" size="lg">
      <KvibHighlight {...args}>
        Du kan tinglyse et eierskifte i grunneboken ved å fylle ut et skjøte, en hjemmelserklæring ved arv, skifte og
        uskifte, eller hjemmelsoverføring til andel i borettslag.
      </KvibHighlight>
    </KvibHeading>
  ),
};

export const HighlightSubstring: Story = {
  args: { query: "kart", styles: { py: "1", fontWeight: "normal" } },
  render: (args) => (
    <KvibBox>
      <KvibText>Søkeresultat for: "kart"</KvibText>
      <KvibText mt="6" fontWeight="bold">
        <KvibHighlight {...args}>Kartverket</KvibHighlight>
      </KvibText>
      <KvibText fontWeight="bold">
        <KvibHighlight {...args}>Sjøkart</KvibHighlight>
      </KvibText>
      <KvibText fontWeight="bold">
        <KvibHighlight {...args}>Marint kartarbeid</KvibHighlight>
      </KvibText>
    </KvibBox>
  ),
};
