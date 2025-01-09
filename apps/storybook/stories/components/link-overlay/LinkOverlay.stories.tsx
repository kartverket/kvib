import { LinkBox as KvibLinkBox, LinkOverlay as KvibLinkOverlay, Text as KvibText } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibLinkOverlay> = {
  title: "Komponenter/Link Overlay",
  component: KvibLinkOverlay,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibLinkOverlay>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
KvibLinkBox.displayName = "LinkBox";
KvibLinkOverlay.displayName = "LinkOverlay";
KvibText.displayName = "Text";

export const Preview: Story = {
  render: args => (
    <KvibLinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
      <KvibLinkOverlay {...args} href="#" />
      <KvibText>This area is clickable</KvibText>
    </KvibLinkBox>
  ),
};
