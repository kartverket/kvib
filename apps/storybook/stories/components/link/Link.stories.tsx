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
      defaultValue: { summary: "underline" },
      options: ["underline", "plain"],
      control: { type: "radio" },
    },
    colorPalette: {
      description: "The color of the link.",
      table: {
        type: { summary: "'green' | 'blue' | 'gray' | 'red'" },
        defaultValue: { summary: "green" },
      },
      options: ["green", "blue", "gray", "red"],
      control: { type: "radio" },
    },
    size: {
      description: "The size of the link.",
      table: {
        type: { summary: "'sm' | 'md' | 'lg'" },
        defaultValue: { summary: "md" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    children: {
      description: "This is the linktext",
      table: {
        type: { summary: "string | ReactNode" },
      },
      control: "text",
    },
    external: {
      description: "If true, an icon will be included.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    href: {
      description: "The URL the link should navigate to.",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    recipe: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibLink>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
KvibLink.displayName = "Link";

export const Preview: Story = {
  args: {
    href: "/?path=/",
    children: "This is a link",
    variant: "underline",
    colorPalette: "green",
    size: "md",
    external: false,
  },
  render: args => <KvibLink {...args}>{args.children}</KvibLink>,
};
