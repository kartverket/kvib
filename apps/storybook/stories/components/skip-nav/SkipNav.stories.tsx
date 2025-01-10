import { Code, SkipNavLink as KvibSkipNavLink } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibSkipNavLink> = {
  title: "Komponenter/SkipNav",
  component: KvibSkipNavLink,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    children: {
      description: "The content of the SkipNavLink",
      table: {
        type: { summary: "ReactNode" },
      },
      control: "text",
    },
  },
  args: {
    children: "Skip to content",
  },
};

export default meta;
type Story = StoryObj<typeof KvibSkipNavLink>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
KvibSkipNavLink.displayName = "SkipNavLink";

export const Preview: Story = {
  render: args => (
    <div>
      Click and press <Code>tab</Code>.
      <KvibSkipNavLink {...args} />
    </div>
  ),
};
