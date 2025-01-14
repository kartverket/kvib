import { Meta, StoryObj } from "@storybook/react";
import { Link as KvibLink } from "../../../../../packages/react/src/typography/link/Link";

const meta: Meta<typeof KvibLink> = {
  title: "Komponenter/Link",
  component: KvibLink,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    variant: {
      description: "The visual style of the component.",
      table: {
        type: { summary: "string" },
      },
      defaultValue: { summary: "underline | plain" },
      options: ["underline", "plain"],
      control: { type: "radio" },
    },
    children: {
      description: "This is the linktext",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    external: {
      description: "If true, an icon will be included.",
      table: {
        type: { summary: "Boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    href: {
      description: "This is the link.",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibLink>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
KvibLink.displayName = "Link";

export const Preview: Story = {
  args: {
    children: "This is a link",
    href: "/?path=/",
  },
  render: args => <KvibLink {...args}>{args.children}</KvibLink>,
};
