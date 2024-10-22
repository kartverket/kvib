import { Container as KvibContainer } from "@kvib/react/src/layout";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibContainer> = {
  title: "Layout/Container",
  component: KvibContainer,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibContainer>;

export const Preview: Story = {
  args: { bg: "green.50", p: "2" },
  render: args => (
    <KvibContainer {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </KvibContainer>
  ),
};
