import {
  Box as KvibBox,
  Heading as KvibHeading,
  LinkBox as KvibLinkBox,
  LinkOverlay as KvibLinkOverlay,
  Text as KvibText,
} from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibLinkOverlay> = {
  title: "Komponenter/LinkOverlay",
  component: KvibLinkOverlay,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    isExternal: {
      description: "If true, the link will open in new tab",
      table: {
        type: { summary: Boolean },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibLinkOverlay>;

export const LinkOverlay: Story = {
  args: {},
  render: (args) => (
    <KvibLinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
      <KvibBox as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
        13 timer siden
      </KvibBox>
      <KvibHeading size="md" my="2">
        <KvibLinkOverlay {...args} href="#">
          Ikke gå deg vill på bærtur
        </KvibLinkOverlay>
      </KvibHeading>
      <KvibText>
        Bær- og soppsesongen er i full gang til skogs og fjells. Last ned Kartverkets gratis mobil-app "Hvor?", så vet
        du hvor du er.
      </KvibText>
    </KvibLinkBox>
  ),
};

export const LinkOverlayNested: Story = {
  args: {},
  render: (args) => (
    <KvibLinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
      <KvibBox as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
        13 timer siden
      </KvibBox>
      <KvibHeading size="md" my="2">
        <KvibLinkOverlay {...args} href="#">
          Ikke gå deg vill på bærtur
        </KvibLinkOverlay>
      </KvibHeading>
      <KvibText mb="3">
        Bær- og soppsesongen er i full gang til skogs og fjells. Last ned Kartverkets gratis mobil-app "Hvor?", så vet
        du hvor du er.
      </KvibText>
      <KvibBox as="a" color="teal.400" href="#" fontWeight="bold">
        En ekstra link
      </KvibBox>
    </KvibLinkBox>
  ),
};
