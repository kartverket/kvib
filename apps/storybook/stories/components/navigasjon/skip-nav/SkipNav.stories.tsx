import { SkipNavLink as KvibSkipNavLink } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibSkipNavLink> = {
  title: "Navigasjon/SkipNav",
  component: KvibSkipNavLink,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof KvibSkipNavLink>;

export const SkipNavLink: Story = {
  args: { children: "SkipNav" },
  render: (args) => (
    <div>
      Trykk her + tab
      <KvibSkipNavLink {...args} />
    </div>
  ),
};
