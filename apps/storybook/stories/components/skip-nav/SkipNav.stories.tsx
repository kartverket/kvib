import { SkipNavLink as KvibSkipNavLink } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibSkipNavLink> = {
  title: "Komponenter/SkipNav",
  component: KvibSkipNavLink,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
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
    children: "Hopp til innhold",
  },
};

export default meta;
type Story = StoryObj<typeof KvibSkipNavLink>;

export const Preview: Story = {
  render: args => (
    <div>
      Trykk her + tab
      <KvibSkipNavLink {...args} />
    </div>
  ),
};
