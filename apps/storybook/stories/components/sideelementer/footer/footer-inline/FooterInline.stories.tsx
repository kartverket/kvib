import { FooterInline as KvibFooterInline, Link } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibFooterInline> = {
  title: "Sideelementer/Footer/Footer-inline",
  component: KvibFooterInline,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    accessibilityUrl: {
      description: "Link to accessibility statement",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    logoLink: {
      description: "Href for logo link",
      table: {
        type: { summary: "string" },
        defaulValue: { summary: "/" },
      },
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibFooterInline>;

export const FooterInline: Story = {
  args: {},
  render: (args) => <KvibFooterInline {...args} />,
};

export const FooterInlineCustom: Story = {
  args: { accessibilityUrl: "https://uustatus.no/nb/erklaringer/publisert/f048c5ff-2167-48c5-b706-bd106c15e9c9" },
  render: (args) => (
    <KvibFooterInline {...args}>
      <Link
        href="https://github.com/kartverket/kvib"
        aria-label="Besøk Kartverkets Designsystem på Github"
        fontWeight="bold"
      >
        Github
      </Link>
    </KvibFooterInline>
  ),
};
