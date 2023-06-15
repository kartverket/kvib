import { Link as KvibLink } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibLink> = {
  title: "Komponenter/Link<3 ",
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

export const Link: Story = {
  args: {
    children: "Dette er en lenke",
    variant: "green",
    href: "/?path=/docs/introduksjon--docs",
    isExternal: false,
  },
  render: (args) => <KvibLink {...args}>{args.children}</KvibLink>,
};

export const LinkExternal: Story = {
  render: () => (
    <KvibLink isExternal={true} variant="green">
      Dette er en lenke
    </KvibLink>
  ),
};

export const LinkInternal: Story = {
  render: () => <KvibLink variant="green">Dette er en intern lenke</KvibLink>,
};
