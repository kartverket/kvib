import { Link as KvibLink } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibLink> = {
  title: "Komponenter/Link",
  component: KvibLink,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
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

export const Preview: Story = {
  args: {
    children: "Dette er en lenke",
    href: "/?path=/",
  },
  render: args => (
    <KvibLink {...args} external>
      {args.children}
    </KvibLink>
  ),
};
