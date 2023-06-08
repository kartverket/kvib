import { TextLink as KvibLink } from "@kvib/react/src/link/TextLink";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibLink> = {
  title: "Komponenter/Text Link",
  component: KvibLink,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    children: {
      description: "Dette er en lenke",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    variant: {
      description: "Variant",
      table: {
        type: { summary: "primary | secondary" },
        defaultValue: { summary: "primary" },
      },
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibLink>;

export const TextLink: Story = {
  args: {
    children: "Dette er en lenke",
    variant: "primary",
    href: "/?path=/docs/introduksjon--docs",
    isExternal: false,
  },
  render: (args) => <KvibLink {...args}>{args.children}</KvibLink>,
};
