import { Footer as KvibFooter, FooterInline as KvibFooterInline } from "@kvib/react";

import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibFooter> = {
  title: "Komponenter/Footer",
  component: KvibFooter,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
  argTypes: {
    accessibilityUrl: {
      description: "Link to accessibility statement",
      control: "text",
    },
    excludeContactInfo: {
      description: "Exclude contact information",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    excludeHelp: {
      description: "Exclude help",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    excludeNews: {
      description: "Exclude news",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    excludeOpeningHours: {
      description: "Exclude opening hours",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    excludePrivacyLink: {
      description: "Exclude privacy link",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    excludeSocialMedia: {
      description: "Exclude social media",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    contactInfoEmailAddress: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibFooter>;

export const Preview: Story = {
  args: {
    accessibilityUrl: "/",
    excludeContactInfo: false,
    excludeHelp: false,
    excludeNews: false,
    excludeOpeningHours: false,
    excludePrivacyLink: false,
    excludeSocialMedia: false,
  },
  render: args => <KvibFooter {...args} />,
};

type InlineStory = StoryObj<typeof KvibFooterInline>;

export const FooterInline: InlineStory = {
  argTypes: {
    accessibilityUrl: {
      description: "Link to accessibility statement",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    privacyUrl: {
      description: "Link to privacy statement",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    logoLink: {
      description: "href for logo link",
      table: {
        type: { summary: "string" },
        defaulValue: { summary: "/" },
      },
      control: "text",
    },
  },
  render: args => <KvibFooterInline {...args} />,
};
