import { Link as KvibLink } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibLink> = {
  title: "Komponenter/Link**",
  component: KvibLink,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    children: {
      description: "This is the linktext",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    isExternal: {
      description: "If true, a icon will be included.",
      table: {
        type: { summary: Boolean },
        defaultValue: { summary: false },
      },
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

export const InternalLink: Story = {
  args: {
    children: "Dette er en lenke",
    href: "/?path=/docs/introduksjon--docs",
    isExternal: false,
  },
  render: (args) => <KvibLink {...args}>{args.children}</KvibLink>,
};

export const ExternalLink: Story = {
  args: {
    children: "Dette er en ekstern lenke",
    href: "/?path=/docs/introduksjon--docs",
    isExternal: true,
  },
  render: (args) => <KvibLink {...args}>{args.children}</KvibLink>,
};
