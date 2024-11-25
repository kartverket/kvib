import { Link } from "@kvib/react";
import {
  Box as KvibBox,
  Heading as KvibHeading,
  LinkBox as KvibLinkBox,
  LinkOverlay as KvibLinkOverlay,
  Text as KvibText,
} from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibLinkOverlay> = {
  title: "Komponenter/Link Overlay",
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
        type: { summary: "Boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibLinkOverlay>;

export const Preview: Story = {
  render: args => (
    <KvibLinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
      <KvibHeading size="md" my="2">
        <KvibLinkOverlay {...args} href="#">
          Denne kan trykkes på
        </KvibLinkOverlay>
      </KvibHeading>
      <KvibText>Hele komponenten er en knapp</KvibText>
    </KvibLinkBox>
  ),
};

export const LinkOverlayNested: Story = {
  render: args => (
    <KvibLinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
      <KvibBox>13 timer siden</KvibBox>
      <KvibHeading size="md" my="2">
        <KvibLinkOverlay {...args} href="#">
          Ikke gå deg vill på bærtur
        </KvibLinkOverlay>
      </KvibHeading>
      <KvibText mb="3">
        Bær- og soppsesongen er i full gang til skogs og fjells. Last ned Kartverkets gratis mobil-app "Hvor?", så vet
        du hvor du er.
      </KvibText>
      <Link href="#">En ekstra link</Link>
    </KvibLinkBox>
  ),
};
